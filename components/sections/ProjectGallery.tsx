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
  fenceSprayClose: "v1785453800/call_CYw1IdLPL1YvyitubPkoYEXe_fw11hf.png",
  commercialDoors: "v1785453796/call_q3dXZpHJCGv1BXsuP9U8amk7_inji5q.png",
  storefrontApplication: "v1785453792/call_2qTFOkuah58EM7rkYQEwLfso_eyy9bi.png",
  fenceDetailSpray: "v1785453792/call_UaTQEJmJUzJnqQv9AcQNnyCN_egncwd.png",
  balconyBeforeAfter: "v1785453792/call_J78GjGic7zymioGKtuBsJqs9_huznz6.png",
  finishedEntranceRails: "v1785453792/call_3FcCgLPG5swFP01Wt9e8lEQy_bde5el.png",
  balconyApplication: "v1785453790/call_IET0NPhTAdEgsYsEZKDuDaBU_bgayyh.png",
  liftStorefront: "v1785453788/call_etgNVj8Icng4alrbi29nutz6_uzmp2t.png",
  stairRailingApplication: "v1785453788/call_HkWTJgcJXNBk3S3S3pX8EM14_lzhe26.png",
  exteriorFenceApplication: "v1785453789/call_0kmEUY5N9NQEayiMENG4BV2m_fy5pam.png",
  finishedFenceGate: "v1785453786/call_aBYTAeH5UUqgtxIrzjjWPIKa_ybelag.png",
};

const cloudinaryImage = (path: string, width: number, height: number) =>
  `https://res.cloudinary.com/wqsitnyu/image/upload/c_fill,g_auto,w_${width},h_${height},f_auto,q_auto/${path}`;

const projects: Project[] = [
  {
    title: "Commercial Aluminum Fence Restoration",
    description:
      "Complete refinishing of an oxidized aluminum fence for a commercial property in Miami-Dade County.",
    image: {
      src: cloudinaryImage(projectImages.exteriorFenceApplication, 1200, 900),
      alt: "electrostatic painting metal fence before after",
    },
    gallery: [
      {
        src: cloudinaryImage(projectImages.exteriorFenceApplication, 1600, 1100),
        alt: "electrostatic painting aluminum fence restoration overall project view",
      },
      {
        src: cloudinaryImage(projectImages.finishedFenceGate, 1600, 1100),
        alt: "electrostatic painting aluminum fence finish close-up detail",
      },
      {
        src: cloudinaryImage(projectImages.fenceSprayClose, 1600, 1100),
        alt: "electrostatic spray gun coating black aluminum fence detail",
      },
    ],
  },
  {
    title: "Office Building Railings",
    description:
      "Electrostatic refinishing of interior and exterior steel railings with a smooth factory-quality finish.",
    image: {
      src: cloudinaryImage(projectImages.stairRailingApplication, 1200, 900),
      alt: "electrostatic painting office building railings factory quality finish",
    },
    gallery: [
      {
        src: cloudinaryImage(projectImages.stairRailingApplication, 1600, 1100),
        alt: "electrostatic painting steel railing close-up finish",
      },
      {
        src: cloudinaryImage(projectImages.balconyApplication, 1600, 1100),
        alt: "electrostatic painting office building railings overall view",
      },
      {
        src: cloudinaryImage(projectImages.balconyBeforeAfter, 1600, 1100),
        alt: "commercial balcony railing electrostatic painting finished appearance",
      },
    ],
  },
  {
    title: "Retail Storefront Restoration",
    description:
      "Restored aging storefront frames without replacing the original aluminum system.",
    image: {
      src: cloudinaryImage(projectImages.storefrontApplication, 1200, 900),
      alt: "electrostatic painting storefront aluminum frame restoration",
    },
    gallery: [
      {
        src: cloudinaryImage(projectImages.storefrontApplication, 1600, 1100),
        alt: "electrostatic painting storefront restoration full project view",
      },
      {
        src: cloudinaryImage(projectImages.liftStorefront, 1600, 1100),
        alt: "electrostatic painting storefront frame finish detail",
      },
      {
        src: cloudinaryImage(projectImages.finishedEntranceRails, 1600, 1100),
        alt: "commercial storefront entrance with restored black metal railings",
      },
    ],
  },
  {
    title: "Industrial Equipment Refinishing",
    description:
      "Professional restoration of industrial equipment and protective metal housings while minimizing production downtime.",
    image: {
      src: cloudinaryImage(projectImages.liftStorefront, 1200, 900),
      alt: "electrostatic painting industrial and commercial metal systems with lift access",
    },
    gallery: [
      {
        src: cloudinaryImage(projectImages.liftStorefront, 1600, 1100),
        alt: "electrostatic painting industrial equipment and exterior metal systems overall view",
      },
      {
        src: cloudinaryImage(projectImages.fenceDetailSpray, 1600, 1100),
        alt: "electrostatic painting protective metal housing finish detail",
      },
    ],
  },
  {
    title: "Commercial Metal Doors",
    description:
      "Refinished damaged hollow metal doors and frames, improving appearance without costly replacement.",
    image: {
      src: cloudinaryImage(projectImages.commercialDoors, 1200, 900),
      alt: "electrostatic painting commercial metal doors and frames",
    },
    gallery: [
      {
        src: cloudinaryImage(projectImages.commercialDoors, 1600, 1100),
        alt: "electrostatic painting hollow metal door refinishing close-up",
      },
      {
        src: cloudinaryImage(projectImages.storefrontApplication, 1600, 1100),
        alt: "electrostatic painting metal door frame finish detail",
      },
    ],
  },
  {
    title: "Warehouse Safety Barriers",
    description:
      "Restoration of bollards, guard rails and warehouse safety barriers using electrostatic application.",
    image: {
      src: cloudinaryImage(projectImages.fenceSprayClose, 1200, 900),
      alt: "electrostatic painting warehouse safety barriers and guard rails",
    },
    gallery: [
      {
        src: cloudinaryImage(projectImages.fenceSprayClose, 1600, 1100),
        alt: "electrostatic painting warehouse safety barriers full view",
      },
      {
        src: cloudinaryImage(projectImages.fenceDetailSpray, 1600, 1100),
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
