import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const exportDir = path.resolve(".next-build");
const nextPathPattern = /(["'])\/_next\//g;
const nextPathReplacement = "$1/electro/_next/";
const stylesheetPattern = /<link rel="stylesheet" href="([^"]+\.css)" data-precedence="next"\/>/g;
const nextScriptPattern = /<script[^>]+src="\/electro\/_next\/[^"]+"[^>]*><\/script>/g;
const nextStylesheetLinkPattern = /<link rel="stylesheet" href="\/electro\/_next\/[^"]+"[^>]*>/g;
const nextPreloadPattern = /<link rel="preload"[^>]+href="\/electro\/_next\/[^"]+"[^>]*>/g;
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

  const countTargets = document.querySelectorAll("[data-count-to]");
  const animateCount = (element) => {
    if (element.getAttribute("data-count-complete") === "true") {
      return;
    }

    const target = Number(element.getAttribute("data-count-to") || "0");
    const suffix = element.getAttribute("data-count-suffix") || "";
    const duration = 1100;
    const start = performance.now();

    element.setAttribute("data-count-complete", "true");

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = Math.round(target * eased).toString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  };

  if (reducedMotion || !("IntersectionObserver" in window)) {
    countTargets.forEach((element) => animateCount(element));
  } else {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      });
    }, {
      threshold: 0.35,
    });

    countTargets.forEach((element) => countObserver.observe(element));
  }

  const header = document.querySelector(".siteHeader");
  const menuToggle = document.querySelector(".menuToggle");
  const mobileDrawer = document.querySelector(".mobileDrawer");
  const logoImage = document.querySelector(".brandOrb__image");
  const navCtaButtons = document.querySelectorAll(".navCta .btn, .mobileDrawer__panel .btn");

  const syncHeader = () => {
    if (!header) return;
    const menuOpen = mobileDrawer?.classList.contains("is-open");
    const isSticky = window.scrollY > 16 || !!menuOpen;
    header.classList.toggle("is-sticky", isSticky);

    navCtaButtons.forEach((button) => {
      button.textContent = isSticky ? "Request Now" : "Send Request";
    });

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

  const serviceAreaMarker = document.querySelector("[data-service-area-marker]");
  const serviceAreaLabel = document.querySelector("[data-service-area-label]");
  const serviceAreaStatus = document.querySelector("[data-service-area-status]");
  const serviceAreaSelects = document.querySelectorAll("[data-service-area-select]");

  const updateServiceAreaMap = (select) => {
    if (!(select instanceof HTMLSelectElement)) return;
    const option = select.selectedOptions[0];
    if (!(option instanceof HTMLOptionElement)) return;

    const city = option.value;
    const x = option.dataset.x;
    const y = option.dataset.y;
    const sector = option.dataset.sector || "South Florida";

    if (!city || !x || !y) return;

    if (serviceAreaMarker instanceof SVGElement) {
      serviceAreaMarker.setAttribute("transform", "translate(" + x + " " + y + ")");
    }

    if (serviceAreaLabel) {
      serviceAreaLabel.textContent = city;
    }

    if (serviceAreaStatus) {
      serviceAreaStatus.textContent = city + " selected in " + sector;
    }

    serviceAreaSelects.forEach((otherSelect) => {
      if (otherSelect !== select && otherSelect instanceof HTMLSelectElement) {
        otherSelect.value = "";
      }

      otherSelect.closest(".serviceAreas__dropdown")?.classList.toggle("is-selected", otherSelect === select);
    });
  };

  serviceAreaSelects.forEach((select) => {
    select.addEventListener("change", () => updateServiceAreaMap(select));
  });

  document.querySelectorAll("[data-testimonials-carousel]").forEach((carousel) => {
    const track = carousel.querySelector("[data-testimonials-track]");
    const prevButton = carousel.querySelector("[data-testimonials-prev]");
    const nextButton = carousel.querySelector("[data-testimonials-next]");
    const dots = Array.from(carousel.querySelectorAll("[data-testimonials-dot]"));

    if (!(track instanceof HTMLElement)) return;

    const slides = Array.from(track.querySelectorAll(".testimonials__slide"));

    const getStep = () => {
      const firstSlide = slides[0];
      if (!(firstSlide instanceof HTMLElement)) return track.clientWidth;

      const styles = window.getComputedStyle(track);
      const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
      return firstSlide.getBoundingClientRect().width + gap;
    };

    const getActiveIndex = () => {
      const step = getStep();
      if (!step) return 0;
      return Math.max(0, Math.min(slides.length - 1, Math.round(track.scrollLeft / step)));
    };

    const syncCarousel = () => {
      const activeIndex = getActiveIndex();
      const activeDotIndex = Math.min(activeIndex, Math.max(0, dots.length - 1));
      dots.forEach((dot, index) => {
        dot.classList.toggle("is-active", index === activeDotIndex);
        dot.setAttribute("aria-current", index === activeDotIndex ? "true" : "false");
      });

      if (prevButton instanceof HTMLButtonElement) {
        prevButton.disabled = track.scrollLeft <= 4;
      }

      if (nextButton instanceof HTMLButtonElement) {
        nextButton.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      }
    };

    const scrollToIndex = (index) => {
      track.scrollTo({
        left: getStep() * Math.max(0, Math.min(slides.length - 1, index)),
        behavior: "smooth",
      });
    };

    if (prevButton instanceof HTMLButtonElement) {
      prevButton.addEventListener("click", () => scrollToIndex(getActiveIndex() - 1));
    }

    if (nextButton instanceof HTMLButtonElement) {
      nextButton.addEventListener("click", () => scrollToIndex(getActiveIndex() + 1));
    }

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const index = Number.parseInt(dot.getAttribute("data-index") || "0", 10);
        scrollToIndex(index);
      });
    });

    track.addEventListener("scroll", () => window.requestAnimationFrame(syncCarousel), { passive: true });
    track.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollToIndex(getActiveIndex() - 1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollToIndex(getActiveIndex() + 1);
      }
    });

    window.addEventListener("resize", syncCarousel);
    syncCarousel();
  });

  const leadPopup = document.querySelector(".leadPopup");
  const leadPopupDialog = document.querySelector(".leadPopup__dialog");
  const leadPopupCloseButtons = document.querySelectorAll("[data-lead-popup-close]");
  let previousLeadPopupOverflow = "";
  let previousLeadPopupFocus = null;

  const openLeadPopup = (trigger) => {
    if (!(leadPopup instanceof HTMLElement)) {
      return;
    }

    previousLeadPopupFocus = trigger instanceof HTMLElement ? trigger : document.activeElement;
    previousLeadPopupOverflow = document.body.style.overflow;
    leadPopup.hidden = false;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => {
      leadPopup.classList.add("is-open");
      const firstInput = leadPopup.querySelector(".leadPopup__form input, .leadPopup__form select, .leadPopup__form textarea");
      if (firstInput instanceof HTMLElement) {
        firstInput.focus();
      }
    });
  };

  const closeLeadPopup = () => {
    if (!(leadPopup instanceof HTMLElement)) {
      return;
    }

    leadPopup.classList.remove("is-open");
    document.body.style.overflow = previousLeadPopupOverflow;
    window.setTimeout(() => {
      if (!leadPopup.classList.contains("is-open")) {
        leadPopup.hidden = true;
      }
    }, 280);

    if (previousLeadPopupFocus instanceof HTMLElement) {
      previousLeadPopupFocus.focus();
    }
  };

  const popupTriggers = document.querySelectorAll(
    'a.btn:not([href^="tel:"]):not([href^="mailto:"]), a.services__serviceLink[href="#contacto"], button.btn:not([type="submit"])'
  );

  popupTriggers.forEach((trigger) => {
    trigger.setAttribute("data-lead-popup-trigger", "true");
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      openLeadPopup(trigger);
    });
  });

  leadPopupCloseButtons.forEach((button) => {
    button.addEventListener("click", closeLeadPopup);
  });

  if (leadPopupDialog instanceof HTMLElement) {
    leadPopupDialog.addEventListener("click", (event) => event.stopPropagation());
  }

  leadPopup?.querySelector("form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!(form instanceof HTMLElement)) {
      return;
    }

    form.classList.add("is-submitted");
    const submitButton = form.querySelector(".leadPopup__submit");
    if (submitButton instanceof HTMLButtonElement) {
      submitButton.textContent = "Request Sent";
      submitButton.disabled = true;
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLeadPopup();
    }
  });

  const faqItems = Array.from(document.querySelectorAll("[data-faq-item]"));

  const syncFaqPanel = (item, open) => {
    const button = item.querySelector("[data-faq-button]");
    const panel = item.querySelector("[data-faq-panel]");

    if (!(button instanceof HTMLElement) || !(panel instanceof HTMLElement)) {
      return;
    }

    item.classList.toggle("is-open", open);
    button.setAttribute("aria-expanded", String(open));
    panel.hidden = false;
    panel.style.maxHeight = open ? panel.scrollHeight + "px" : "0px";
    panel.style.opacity = open ? "1" : "0";

    if (!open) {
      window.setTimeout(() => {
        if (!item.classList.contains("is-open")) {
          panel.hidden = true;
        }
      }, 360);
    }
  };

  faqItems.forEach((item, index) => {
    syncFaqPanel(item, item.classList.contains("is-open") || index === 0);

    const button = item.querySelector("[data-faq-button]");
    if (!(button instanceof HTMLElement)) {
      return;
    }

    button.addEventListener("click", () => {
      const shouldOpen = !item.classList.contains("is-open");

      faqItems.forEach((otherItem) => {
        syncFaqPanel(otherItem, shouldOpen && otherItem === item);
      });
    });
  });

  const galleryButtons = document.querySelectorAll(".projectGallery__media[data-gallery-items]");
  let activeGallery = null;

  const closeGallery = () => {
    if (!activeGallery) {
      return;
    }

    activeGallery.modal.remove();
    document.body.style.overflow = activeGallery.previousOverflow;
    activeGallery = null;
  };

  const renderGalleryImage = () => {
    if (!activeGallery) {
      return;
    }

    const item = activeGallery.items[activeGallery.index];
    if (!item) {
      return;
    }

    activeGallery.image.src = item.src;
    activeGallery.image.alt = item.alt || activeGallery.title;
    activeGallery.count.textContent = (activeGallery.index + 1) + " / " + activeGallery.items.length;
  };

  const goGallery = (direction) => {
    if (!activeGallery) {
      return;
    }

    const total = activeGallery.items.length;
    activeGallery.index = (activeGallery.index + direction + total) % total;
    renderGalleryImage();
  };

  const openGallery = (button) => {
    let items = [];
    try {
      items = JSON.parse(button.getAttribute("data-gallery-items") || "[]");
    } catch {
      items = [];
    }

    if (!Array.isArray(items) || items.length === 0) {
      return;
    }

    closeGallery();

    const title = button.getAttribute("data-gallery-title") || "Project image gallery";
    const previousOverflow = document.body.style.overflow;
    const modal = document.createElement("div");
    modal.className = "lightbox";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", title + " project gallery");

    modal.innerHTML =
      '<button class="lightbox__backdrop" type="button" aria-label="Close gallery"></button>' +
      '<div class="lightbox__dialog">' +
      '<div class="lightbox__topbar">' +
      '<p></p>' +
      '<button class="lightbox__close" type="button" aria-label="Close gallery">x</button>' +
      '</div>' +
      '<button class="lightbox__nav lightbox__nav--prev" type="button" aria-label="Previous image"><span aria-hidden="true">&lt;</span></button>' +
      '<div class="lightbox__frame"><img class="lightbox__image" alt="" /></div>' +
      '<button class="lightbox__nav lightbox__nav--next" type="button" aria-label="Next image"><span aria-hidden="true">&gt;</span></button>' +
      '<p class="lightbox__count"></p>' +
      '</div>';

    const image = modal.querySelector(".lightbox__image");
    const count = modal.querySelector(".lightbox__count");
    const titleElement = modal.querySelector(".lightbox__topbar p");
    titleElement.textContent = title;

    modal.querySelector(".lightbox__backdrop")?.addEventListener("click", closeGallery);
    modal.querySelector(".lightbox__close")?.addEventListener("click", closeGallery);
    modal.querySelector(".lightbox__nav--prev")?.addEventListener("click", () => goGallery(-1));
    modal.querySelector(".lightbox__nav--next")?.addEventListener("click", () => goGallery(1));

    activeGallery = {
      modal,
      items,
      index: 0,
      image,
      count,
      title,
      previousOverflow,
    };

    document.body.style.overflow = "hidden";
    document.body.appendChild(modal);
    renderGalleryImage();
  };

  galleryButtons.forEach((button) => {
    button.addEventListener("click", () => openGallery(button));
  });

  const surfaceAccordions = Array.from(document.querySelectorAll("[data-surface-accordion]"));
  surfaceAccordions.forEach((accordion) => {
    accordion.addEventListener("toggle", () => {
      if (!accordion.open) {
        return;
      }

      surfaceAccordions.forEach((otherAccordion) => {
        if (otherAccordion !== accordion) {
          otherAccordion.open = false;
        }
      });
    });
  });

  document.querySelectorAll("[data-industry-tabs]").forEach((tabsRoot) => {
    const tabs = Array.from(tabsRoot.querySelectorAll("[data-industry-tab]"));
    const panels = Array.from(tabsRoot.querySelectorAll("[data-industry-panel]"));

    const activateIndustryTab = (nextId) => {
      tabs.forEach((tab) => {
        const isActive = tab.getAttribute("data-industry-tab") === nextId;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      panels.forEach((panel) => {
        const isActive = panel.getAttribute("data-industry-panel") === nextId;
        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
      });
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        const nextId = tab.getAttribute("data-industry-tab");
        if (nextId) {
          activateIndustryTab(nextId);
        }
      });

      tab.addEventListener("keydown", (event) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
          return;
        }

        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        const nextTab = tabs[(index + direction + tabs.length) % tabs.length];
        const nextId = nextTab?.getAttribute("data-industry-tab");
        if (nextId) {
          nextTab.focus();
          activateIndustryTab(nextId);
        }
      });
    });
  });

  window.addEventListener("keydown", (event) => {
    if (!activeGallery) {
      return;
    }

    if (event.key === "Escape") {
      closeGallery();
    }

    if (event.key === "ArrowLeft") {
      goGallery(-1);
    }

    if (event.key === "ArrowRight") {
      goGallery(1);
    }
  });
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
  const relativeHref = href.replace(/^\/electro\//, "");
  return path.join(exportDir, relativeHref);
}

async function inlineStylesheets(file, original) {
  let updated = original;
  const matches = [...original.matchAll(stylesheetPattern)];

  for (const match of matches) {
    const [fullTag, href] = match;
    const cssPath = resolveCssPath(href);
    let css = await readFile(cssPath, "utf8");
    css = css.replace(/url\(\.\.\/media\//g, "url(/electro/_next/static/media/");
    css = await inlineFontFiles(css, cssPath);
    const inlineTag = `<style data-inline-css="${path.basename(cssPath)}">${css}</style>`;
    updated = updated.replace(fullTag, inlineTag);
  }

  return updated;
}

async function inlineFontFiles(css, cssPath) {
  const fontUrlPattern = /url\((['"]?)(\/electro\/_next\/static\/media\/[^)'"]+\.woff2)\1\)/g;
  const replacements = [...css.matchAll(fontUrlPattern)];

  if (replacements.length === 0) {
    return css;
  }

  let updatedCss = css;

  for (const match of replacements) {
    const [fullMatch, , assetPath] = match;
    const relativeAssetPath = assetPath.replace(/^\/electro\//, "");
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
