import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Mail, Rocket } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { personalInfo, projects } from "@/lib/data";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <section className="section-pad">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <p className="eyebrow mb-3">Portafolio web optimizado</p>
              <h1 className="hero-title mb-4">{personalInfo.name}</h1>
              <p className="lead lead-dark mb-3">{personalInfo.title}</p>
              <p className="lead-dark fs-5 mb-4 col-xl-10">
                {personalInfo.description}
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="btn btn-accent d-inline-flex align-items-center gap-2 px-4 py-3"
                >
                  Ver Proyectos
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="btn btn-ghost d-inline-flex align-items-center gap-2 px-4 py-3"
                >
                  Contacto
                  <Mail size={18} aria-hidden="true" />
                </Link>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost d-inline-flex align-items-center gap-2 px-4 py-3"
                >
                  GitHub
                  <Code2 size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="dark-panel p-3 p-md-4">
                <div className="avatar-frame mx-auto position-relative mb-4">
                  <Image
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    fill
                    priority
                    sizes="240px"
                  />
                </div>
                <div className="d-flex align-items-center gap-3">
                  <Rocket className="icon-soft flex-shrink-0" size={32} />
                  <div>
                    <p className="mb-1 text-white fw-semibold">
                      SEO, rendimiento y despliegue
                    </p>
                    <p className="mb-0 lead-dark">
                      Next.js, Bootstrap, sitemap dinamico y robots.txt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-5">
        <div className="container">
          <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3 mb-4">
            <div>
              <p className="eyebrow mb-2">Trabajo destacado</p>
              <h2 className="text-white fw-bold mb-0">Proyectos principales</h2>
            </div>
            <Link href="/projects" className="nav-link-dark">
              Ver todos los proyectos
            </Link>
          </div>
          <div className="row g-4">
            {featuredProjects.map((project) => (
              <div className="col-md-6 col-xl-4" key={project.slug}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
