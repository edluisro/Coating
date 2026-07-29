import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const exportDir = path.resolve(".next-build");
const nextPathPattern = /(["'])\/_next\//g;
const nextPathReplacement = "$1/landing-next/_next/";
const stylesheetPattern = /<link rel="stylesheet" href="([^"]+\.css)" data-precedence="next"\/>/g;
const nextScriptPattern = /<script[^>]+src="\/landing-next\/_next\/[^"]+"[^>]*><\/script>/g;
const nextStylesheetLinkPattern = /<link rel="stylesheet" href="\/landing-next\/_next\/[^"]+"[^>]*>/g;
const nextPreloadPattern = /<link rel="preload"[^>]+href="\/landing-next\/_next\/[^"]+"[^>]*>/g;
const behaviorScript = String.raw`<script>
(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealSelector = ".reveal";

  const activateReveal = (element) => {
    element.classList.add("is-visible");
    element.querySelectorAll(".reveal").forEach((child) => child.classList.add("is-visible"));
  };

  document.querySelectorAll("[data-stagger]").forEach((container) => {
    const stagger = Number(container.getAttribute("data-stagger") || "0");
    const variantClass = Array.from(container.classList).find((name) => name.startsWith("reveal--")) || "reveal--fade-up";

    Array.from(container.children).forEach((child, index) => {
      if (!(child instanceof HTMLElement) || child.classList.contains("reveal")) {
        return;
      }

      child.classList.add("reveal", variantClass);
      child.style.transitionDelay = (index * stagger) + "ms";
    });
  });

  document.querySelectorAll("[data-delay]").forEach((element) => {
    const delay = element.getAttribute("data-delay");
    if (delay && element instanceof HTMLElement) {
      element.style.transitionDelay = delay + "ms";
    }
  });

  if (reducedMotion || !("IntersectionObserver" in window)) {
    document.querySelectorAll(revealSelector).forEach((element) => activateReveal(element));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        activateReveal(entry.target);
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px",
    });

    document.querySelectorAll(revealSelector).forEach((element) => observer.observe(element));
  }

  const header = document.querySelector(".siteHeader");
  const menuToggle = document.querySelector(".menuToggle");
  const mobileDrawer = document.querySelector(".mobileDrawer");
  const logoImage = document.querySelector(".brandOrb__image");

  const syncHeader = () => {
    if (!header) return;
    const menuOpen = mobileDrawer?.classList.contains("is-open");
    const isSticky = window.scrollY > 16 || !!menuOpen;
    header.classList.toggle("is-sticky", isSticky);

    if (logoImage instanceof HTMLImageElement) {
      const defaultLogo = logoImage.getAttribute("data-logo-default");
      const scrolledLogo = logoImage.getAttribute("data-logo-scrolled");
      const nextLogo = isSticky ? scrolledLogo : defaultLogo;

      if (nextLogo && logoImage.getAttribute("src") !== nextLogo) {
        logoImage.setAttribute("src", nextLogo);
      }
    }
  };

  const setMenuState = (open) => {
    if (!(menuToggle instanceof HTMLElement) || !(mobileDrawer instanceof HTMLElement)) {
      return;
    }

    mobileDrawer.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Cerrar menu de navegacion" : "Abrir menu de navegacion");
    syncHeader();
  };

  if (menuToggle instanceof HTMLElement && mobileDrawer instanceof HTMLElement) {
    menuToggle.addEventListener("click", () => setMenuState(!mobileDrawer.classList.contains("is-open")));

    mobileDrawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuState(false));
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setMenuState(false);
      }
    });
  }

  window.addEventListener("scroll", syncHeader, { passive: true });
  syncHeader();
})();
</script>`;

async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(dir, entry.name);
      return entry.isDirectory() ? listFiles(fullPath) : fullPath;
    }),
  );

  return files.flat();
}

function resolveCssPath(href) {
  const relativeHref = href.replace(/^\/landing-next\//, "");
  return path.join(exportDir, relativeHref);
}

async function inlineStylesheets(file, original) {
  let updated = original;
  const matches = [...original.matchAll(stylesheetPattern)];

  for (const match of matches) {
    const [fullTag, href] = match;
    const cssPath = resolveCssPath(href);
    let css = await readFile(cssPath, "utf8");
    css = css.replace(/url\(\.\.\/media\//g, "url(/landing-next/_next/static/media/");
    css = await inlineFontFiles(css, cssPath);
    const inlineTag = `<style data-inline-css="${path.basename(cssPath)}">${css}</style>`;
    updated = updated.replace(fullTag, inlineTag);
  }

  return updated;
}

async function inlineFontFiles(css, cssPath) {
  const fontUrlPattern = /url\((['"]?)(\/landing-next\/_next\/static\/media\/[^)'"]+\.woff2)\1\)/g;
  const replacements = [...css.matchAll(fontUrlPattern)];

  if (replacements.length === 0) {
    return css;
  }

  let updatedCss = css;

  for (const match of replacements) {
    const [fullMatch, , assetPath] = match;
    const relativeAssetPath = assetPath.replace(/^\/landing-next\//, "");
    const fontPath = path.join(exportDir, relativeAssetPath);
    const fontBuffer = await readFile(fontPath);
    const dataUrl = `url(data:font/woff2;base64,${fontBuffer.toString("base64")})`;
    updatedCss = updatedCss.replace(fullMatch, dataUrl);
  }

  return updatedCss;
}

const files = await listFiles(exportDir);

await Promise.all(
  files
    .filter((file) => file.endsWith(".html") || file.endsWith(".txt"))
    .map(async (file) => {
      const original = await readFile(file, "utf8");
      let updated = original.replace(nextPathPattern, nextPathReplacement);

      if (file.endsWith(".html")) {
        updated = await inlineStylesheets(file, updated);
        updated = updated
          .replace(nextScriptPattern, "")
          .replace(nextStylesheetLinkPattern, "")
          .replace(nextPreloadPattern, "");

        if (!updated.includes("IntersectionObserver") && updated.includes("</body>")) {
          updated = updated.replace("</body>", `${behaviorScript}</body>`);
        }
      }

      if (updated !== original) {
        await writeFile(file, updated);
      }
    }),
);
