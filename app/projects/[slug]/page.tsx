import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Code2, ExternalLink, Layers } from "lucide-react";
import { projects } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="section-pad">
      <div className="container">
        <Link
          href="/projects"
          className="nav-link-dark d-inline-flex align-items-center gap-2 mb-4"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Volver a Proyectos
        </Link>

        <article className="row g-5 align-items-start">
          <div className="col-lg-7">
            <div className="detail-media">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 992px) 100vw, 58vw"
              />
            </div>
          </div>

          <div className="col-lg-5">
            <p className="eyebrow mb-2">Detalle del proyecto</p>
            <h1 className="text-white fw-bold mb-3">{project.title}</h1>
            <p className="lead-dark fs-5 mb-4">{project.description}</p>

            <div className="dark-panel p-4 mb-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <Layers className="icon-soft" size={22} />
                <h2 className="h5 text-white fw-bold mb-0">
                  Tecnologias Utilizadas
                </h2>
              </div>
              <div className="d-flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="d-flex flex-wrap gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent d-inline-flex align-items-center gap-2 px-4 py-3"
                >
                  Ver Demo
                  <ExternalLink size={18} aria-hidden="true" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost d-inline-flex align-items-center gap-2 px-4 py-3"
                >
                  Ver Codigo
                  <Code2 size={18} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
