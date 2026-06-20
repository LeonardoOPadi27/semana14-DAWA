import type { Metadata } from "next";
import { BriefcaseBusiness } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { personalInfo, projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Explora mi coleccion de proyectos de desarrollo web y aplicaciones.",
  openGraph: {
    title: "Proyectos - Portafolio",
    description: "Explora mi coleccion de proyectos de desarrollo web.",
    images: [personalInfo.avatar],
  },
};

export default function ProjectsPage() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="mb-5 d-flex align-items-center gap-3">
          <BriefcaseBusiness className="icon-soft" size={36} />
          <div>
            <p className="eyebrow mb-2">Portafolio</p>
            <h1 className="text-white fw-bold mb-0">Mis Proyectos</h1>
          </div>
        </div>
        <p className="lead-dark fs-5 mb-5 col-lg-7">
          Una coleccion de proyectos desarrollados con enfoque en rendimiento,
          SEO, buenas practicas y despliegue moderno.
        </p>

        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-6 col-xl-4" key={project.slug}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
