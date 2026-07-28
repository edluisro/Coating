"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Lightbox } from "@/components/ui/Lightbox";
import { Reveal } from "@/components/ui/Reveal";

type ProjectImage = {
  src: string;
  alt: string;
};

type Project = {
  title: string;
  description: string;
  image: ProjectImage;
  gallery: ProjectImage[];
};

const projects: Project[] = [
  {
    title: "Commercial Aluminum Fence Restoration",
    description:
      "Complete refinishing of an oxidized aluminum fence for a commercial property in Miami-Dade County.",
    image: {
      src: "https://res.cloudinary.com/wqsitnyu/image/upload/c_fill,g_auto,w_1200,h_900,f_auto,q_auto/v1784941499/2149878749_sshdkh.jpg",
      alt: "electrostatic painting aluminum fence restoration before after close view",
    },
    gallery: [
      {
        src: "https://res.cloudinary.com/wqsitnyu/image/upload/c_fill,g_auto,w_1600,h_1200,f_auto,q_auto/v1784941499/2149878749_sshdkh.jpg",
        alt: "electrostatic painting aluminum fence restoration before after full project view",
      },
      {
        src: "https://res.cloudinary.com/wqsitnyu/image/upload/c_fill,g_auto,w_1600,h_1200,x_260,y_230,f_auto,q_auto/v1784941499/2149878749_sshdkh.jpg",
        alt: "electrostatic painting aluminum fence restoration finish detail",
      },
    ],
  },
  {
    title: "Office Building Railings",
    description:
      "Electrostatic refinishing of interior and exterior steel railings with a smooth factory-quality finish.",
    image: {
      src: "https://res.cloudinary.com/wqsitnyu/image/upload/c_fill,g_auto,w_1200,h_900,f_auto,q_auto/v1784941445/2149878754_yywmzy.jpg",
      alt: "electrostatic painting office building railings detail",
    },
    gallery: [
      {
        src: "https://res.cloudinary.com/wqsitnyu/image/upload/c_fill,g_auto,w_1600,h_1200,f_auto,q_auto/v1784941445/2149878754_yywmzy.jpg",
        alt: "electrostatic painting office building railings overall view",
      },
      {
        src: "https://res.cloudinary.com/wqsitnyu/image/upload/c_fill,g_auto,w_1600,h_1200,x_180,y_180,f_auto,q_auto/v1784941445/2149878754_yywmzy.jpg",
        alt: "electrostatic painting steel railing close-up finish",
      },
    ],
  },
  {
    title: "Retail Storefront Restoration",
    description:
      "Restored aging storefront frames without replacing the original aluminum system.",
    image: {
      src: "https://res.cloudinary.com/wqsitnyu/image/upload/c_fill,g_auto,w_1200,h_900,f_auto,q_auto/v1784941421/closeup-shot-worker-protective-gloves-painting-wooden-details_jsra0d.jpg",
      alt: "electrostatic painting storefront restoration close-up application",
    },
    gallery: [
      {
        src: "https://res.cloudinary.com/wqsitnyu/image/upload/c_fill,g_auto,w_1600,h_1200,f_auto,q_auto/v1784941421/closeup-shot-worker-protective-gloves-painting-wooden-details_jsra0d.jpg",
        alt: "electrostatic painting storefront restoration application detail",
      },
      {
        src: "https://res.cloudinary.com/wqsitnyu/image/upload/c_fill,g_auto,w_1600,h_1200,x_340,y_220,f_auto,q_auto/v1784941421/closeup-shot-worker-protective-gloves-painting-wooden-details_jsra0d.jpg",
        alt: "electrostatic painting storefront aluminum frame finish close-up",
      },
    ],
  },
  {
    title: "Industrial Equipment Refinishing",
    description:
      "Professional restoration of industrial equipment and protective metal housings while minimizing production downtime.",
    image: {
      src: "https://res.cloudinary.com/wqsitnyu/image/upload/c_fill,g_auto,w_1200,h_900,f_auto,q_auto/v1784941499/2149878749_sshdkh.jpg",
      alt: "electrostatic painting industrial equipment refinishing overall view",
    },
    gallery: [
      {
        src: "https://res.cloudinary.com/wqsitnyu/image/upload/c_fill,g_auto,w_1600,h_1200,x_160,y_120,f_auto,q_auto/v1784941499/2149878749_sshdkh.jpg",
        alt: "electrostatic painting industrial equipment refinishing close-up",
      },
      {
        src: "https://res.cloudinary.com/wqsitnyu/image/upload/c_fill,g_auto,w_1600,h_1200,x_420,y_320,f_auto,q_auto/v1784941499/2149878749_sshdkh.jpg",
        alt: "electrostatic painting protective metal housing finish detail",
      },
    ],
  },
  {
    title: "Commercial Metal Doors",
    description:
      "Refinished damaged hollow metal doors and frames, improving appearance without costly replacement.",
    image: {
      src: "https://res.cloudinary.com/wqsitnyu/image/upload/c_fill,g_auto,w_1200,h_900,f_auto,q_auto/v1784941445/2149878754_yywmzy.jpg",
      alt: "electrostatic painting commercial metal doors and frames restoration",
    },
    gallery: [
      {
        src: "https://res.cloudinary.com/wqsitnyu/image/upload/c_fill,g_auto,w_1600,h_1200,x_280,y_120,f_auto,q_auto/v1784941445/2149878754_yywmzy.jpg",
        alt: "electrostatic painting hollow metal door refinishing close-up",
      },
      {
        src: "https://res.cloudinary.com/wqsitnyu/image/upload/c_fill,g_auto,w_1600,h_1200,x_420,y_260,f_auto,q_auto/v1784941445/2149878754_yywmzy.jpg",
        alt: "electrostatic painting metal door frame finish detail",
      },
    ],
  },
  {
    title: "Warehouse Safety Barriers",
    description:
      "Restoration of bollards, guard rails and warehouse safety barriers using electrostatic application.",
    image: {
      src: "https://res.cloudinary.com/wqsitnyu/image/upload/c_fill,g_auto,w_1200,h_900,f_auto,q_auto/v1784941421/closeup-shot-worker-protective-gloves-painting-wooden-details_jsra0d.jpg",
      alt: "electrostatic painting warehouse safety barriers close-up",
    },
    gallery: [
      {
        src: "https://res.cloudinary.com/wqsitnyu/image/upload/c_fill,g_auto,w_1600,h_1200,x_100,y_90,f_auto,q_auto/v1784941421/closeup-shot-worker-protective-gloves-painting-wooden-details_jsra0d.jpg",
        alt: "electrostatic painting warehouse guard rail application detail",
      },
      {
        src: "https://res.cloudinary.com/wqsitnyu/image/upload/c_fill,g_auto,w_1600,h_1200,x_420,y_260,f_auto,q_auto/v1784941421/closeup-shot-worker-protective-gloves-painting-wooden-details_jsra0d.jpg",
        alt: "electrostatic painting warehouse safety barrier finish detail",
      },
    ],
  },
];

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  return (
    <Reveal variant="fade-up" delay={index * 90}>
      <article className="projectGallery__card">
        <button
          className="projectGallery__media"
          type="button"
          onClick={onOpen}
          aria-label={`Open gallery for ${project.title}`}
        >
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="projectGallery__image"
          />
          <span className="projectGallery__overlay" aria-hidden="true" />
        </button>
        <div className="projectGallery__copy stack-sm">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </article>
    </Reveal>
  );
}

export function ProjectGallery() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const selectedProject = activeProject !== null ? projects[activeProject] : null;

  const openProject = (projectIndex: number) => {
    setActiveProject(projectIndex);
    setActiveSlide(0);
  };

  const closeProject = () => {
    setActiveProject(null);
    setActiveSlide(0);
  };

  const goPrev = () => {
    if (!selectedProject) {
      return;
    }
    setActiveSlide((current) => (current === 0 ? selectedProject.gallery.length - 1 : current - 1));
  };

  const goNext = () => {
    if (!selectedProject) {
      return;
    }
    setActiveSlide((current) => (current === selectedProject.gallery.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="projectGallery section section--alt" aria-labelledby="project-gallery-title">
      <div className="container projectGallery__inner">
        <Reveal variant="fade-up">
          <header className="projectGallery__header stack-md text-center">
            <h2 id="project-gallery-title">See the Difference Professional Electrostatic Painting Can Make</h2>
            <h3>Real Projects. Real Transformations. Real Results.</h3>
            <p>
              Every project tells a story. From weathered railings and faded storefronts to aging industrial equipment
              and commercial fencing, our work is focused on restoring metal surfaces that businesses rely on every
              day.
            </p>
            <p>
              Browse a selection of recent projects to see how electrostatic painting can dramatically improve
              appearance while extending the life of existing metal assets.
            </p>
          </header>
        </Reveal>

        <div className="projectGallery__grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} onOpen={() => openProject(index)} />
          ))}
        </div>

        <Reveal className="projectGallery__highlightWrap" variant="fade-up" delay={180}>
          <div className="projectGallery__highlight stack-md">
            <p className="projectGallery__highlightLabel">EVERY PROJECT HAS THE SAME GOAL</p>
            <h3>
              <span>Restore.</span>
              <span>Protect.</span>
              <span>Extend Service Life.</span>
            </h3>
            <p>
              Whether the project involves a single storefront or an entire commercial facility, our commitment
              remains the same: exceptional workmanship, professional execution and long-lasting results.
            </p>
          </div>
        </Reveal>

        <Reveal className="projectGallery__ctaWrap" variant="fade-up" delay={240}>
          <Button href="#contacto">View More Projects</Button>
        </Reveal>
      </div>

      {selectedProject ? (
        <Lightbox
          items={selectedProject.gallery}
          index={activeSlide}
          onClose={closeProject}
          onPrev={goPrev}
          onNext={goNext}
        />
      ) : null}
    </section>
  );
}
