import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="project-card d-block">
      <div className="project-media">
        <Image
          src={project.image}
          alt={project.title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 p-lg-4">
        <div className="mb-2 d-flex align-items-start justify-content-between gap-3">
          <h3 className="mb-0 fs-5 fw-bold text-white">{project.title}</h3>
          <ArrowUpRight className="icon-soft flex-shrink-0" size={18} />
        </div>
        <p className="project-copy mb-4">
          {project.description}
        </p>
        <div className="d-flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="tech-pill">
              <Code2 size={13} aria-hidden="true" />
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tech-pill">+{project.technologies.length - 3}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
