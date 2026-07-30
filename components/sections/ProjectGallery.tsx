"use client";

import Image from "next/image";
import { useState } from "react";
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

const projectImages = {
  industrialRepair: "v1785380173/electrostatic_12_industrial_repair_metal_rovm7l.jpg",
  paintBoothBody: "v1785380170/electrostatic_10_car_body_paint_booth_maq7xk.jpg",
  workerMetal: "v1785380168/electrostatic_11_worker_painting_metal_em77g2.jpg",
  carFrame: "v1785380164/electrostatic_07_vintage_car_frame_paint_booth_fdexq8.jpg",
  industrialStructure: "v1785380163/electrostatic_08_industrial_structure_painting_uiob88.jpg",
  metalPanels: "v1785380162/electrostatic_04_spray_paint_metal_panels_k6jtzt.jpg",
  industrialSpray: "v1785380127/electrostatic_05_industrial_metal_spray_a7sijq.jpg",
  sprayCloud: "v1785380114/electrostatic_09_spray_paint_cloud_gvoukf.jpg",
  carPartSpray: "v1785380135/electrostatic_13_car_part_spray_paint_ynhhdy.jpg",
  coatedPipes: "v1785380131/electrostatic_03_powder_coating_pipes_rf0f8n.jpg",
};

const cloudinaryImage = (path: string, width: number, height: number) =>
  `https://res.cloudinary.com/wqsitnyu/image/upload/c_fill,g_auto,w_${width},h_${height},f_auto,q_auto/${path}`;

const projects: Project[] = [
  {
    title: "Commercial Aluminum Fence Restoration",
    description:
      "Complete refinishing of an oxidized aluminum fence for a commercial property in Miami-Dade County.",
    image: {
      src: cloudinaryImage(projectImages.industrialSpray, 1200, 900),
      alt: "electrostatic painting metal fence before after",
    },
    gallery: [
      {
        src: cloudinaryImage(projectImages.industrialSpray, 1600, 1100),
        alt: "electrostatic painting aluminum fence restoration overall project view",
      },
      {
        src: cloudinaryImage(projectImages.sprayCloud, 1600, 1100),
        alt: "electrostatic painting aluminum fence finish close-up detail",
      },
    ],
  },
  {
    title: "Office Building Railings",
    description:
      "Electrostatic refinishing of interior and exterior steel railings with a smooth factory-quality finish.",
    image: {
      src: cloudinaryImage(projectImages.workerMetal, 1200, 900),
      alt: "electrostatic painting office building railings factory quality finish",
    },
    gallery: [
      {
        src: cloudinaryImage(projectImages.workerMetal, 1600, 1100),
        alt: "electrostatic painting steel railing close-up finish",
      },
      {
        src: cloudinaryImage(projectImages.metalPanels, 1600, 1100),
        alt: "electrostatic painting office building railings overall view",
      },
    ],
  },
  {
    title: "Retail Storefront Restoration",
    description:
      "Restored aging storefront frames without replacing the original aluminum system.",
    image: {
      src: cloudinaryImage(projectImages.metalPanels, 1200, 900),
      alt: "electrostatic painting storefront aluminum frame restoration",
    },
    gallery: [
      {
        src: cloudinaryImage(projectImages.metalPanels, 1600, 1100),
        alt: "electrostatic painting storefront restoration full project view",
      },
      {
        src: cloudinaryImage(projectImages.carFrame, 1600, 1100),
        alt: "electrostatic painting storefront frame finish detail",
      },
    ],
  },
  {
    title: "Industrial Equipment Refinishing",
    description:
      "Professional restoration of industrial equipment and protective metal housings while minimizing production downtime.",
    image: {
      src: cloudinaryImage(projectImages.industrialRepair, 1200, 900),
      alt: "electrostatic painting industrial equipment refinishing",
    },
    gallery: [
      {
        src: cloudinaryImage(projectImages.industrialRepair, 1600, 1100),
        alt: "electrostatic painting industrial equipment refinishing overall view",
      },
      {
        src: cloudinaryImage(projectImages.coatedPipes, 1600, 1100),
        alt: "electrostatic painting protective metal housing finish detail",
      },
    ],
  },
  {
    title: "Commercial Metal Doors",
    description:
      "Refinished damaged hollow metal doors and frames, improving appearance without costly replacement.",
    image: {
      src: cloudinaryImage(projectImages.paintBoothBody, 1200, 900),
      alt: "electrostatic painting commercial metal doors and frames",
    },
    gallery: [
      {
        src: cloudinaryImage(projectImages.paintBoothBody, 1600, 1100),
        alt: "electrostatic painting hollow metal door refinishing close-up",
      },
      {
        src: cloudinaryImage(projectImages.carPartSpray, 1600, 1100),
        alt: "electrostatic painting metal door frame finish detail",
      },
    ],
  },
  {
    title: "Warehouse Safety Barriers",
    description:
      "Restoration of bollards, guard rails and warehouse safety barriers using electrostatic application.",
    image: {
      src: cloudinaryImage(projectImages.industrialStructure, 1200, 900),
      alt: "electrostatic painting warehouse safety barriers and guard rails",
    },
    gallery: [
      {
        src: cloudinaryImage(projectImages.industrialStructure, 1600, 1100),
        alt: "electrostatic painting warehouse safety barriers full view",
      },
      {
        src: cloudinaryImage(projectImages.carFrame, 1600, 1100),
        alt: "electrostatic painting warehouse guard rail application detail",
      },
    ],
  },
];

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  return (
    <Reveal variant="fade-up" delay={index * 80}>
      <article className="projectGallery__card">
        <button
          className="projectGallery__media"
          type="button"
          onClick={onOpen}
          aria-label={`Open gallery for ${project.title}`}
          data-gallery-title={project.title}
          data-gallery-items={JSON.stringify(project.gallery)}
        >
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="projectGallery__image"
          />
          <span className="projectGallery__overlay" aria-hidden="true">
            View Project
          </span>
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

  const selectedProject = activeProject === null ? null : projects[activeProject];

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
    <section className="projectGallery section section--alt" id="projects" aria-labelledby="project-gallery-title">
      <div className="container projectGallery__inner">
        <Reveal variant="fade-up">
          <header className="projectGallery__header stack-md text-center">
            <h2 id="project-gallery-title">See the Difference Professional Electrostatic Painting Can Make</h2>
            <h3>Real Projects. Real Transformations. Real Results.</h3>
            <p>
              Every project tells a story. From weathered railings and faded storefronts to aging industrial equipment
              and commercial fencing, our work is focused on restoring metal surfaces that businesses rely on every day.
            </p>
            <p>
              Browse a selection of recent projects to see how electrostatic painting can dramatically improve appearance
              while extending the life of existing metal assets.
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
              Whether the project involves a single storefront or an entire commercial facility, our commitment remains
              the same: exceptional workmanship, professional execution and long-lasting results.
            </p>
          </div>
        </Reveal>

      </div>

      {selectedProject ? (
        <Lightbox
          items={selectedProject.gallery}
          index={activeSlide}
          title={selectedProject.title}
          onClose={closeProject}
          onPrev={goPrev}
          onNext={goNext}
        />
      ) : null}
    </section>
  );
}
