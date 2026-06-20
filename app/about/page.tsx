import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, Code2, GraduationCap } from "lucide-react";
import { personalInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sobre Mi",
  description: `Conoce mas sobre ${personalInfo.name}, ${personalInfo.title}.`,
};

export default function AboutPage() {
  const skills = [
    "JavaScript/TypeScript",
    "React & Next.js",
    "Node.js & Express",
    "PostgreSQL & MongoDB",
    "Bootstrap",
    "Git & GitHub",
    "InfinityFree",
    "SEO tecnico",
  ];

  return (
    <section className="section-pad">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-4">
            <div className="dark-panel p-3">
              <div className="avatar-frame w-100 position-relative">
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 992px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <p className="eyebrow mb-2">Sobre Mi</p>
            <h1 className="text-white fw-bold mb-4">
              Hola, soy {personalInfo.name}
            </h1>
            <div className="dark-panel p-4 p-lg-5 mb-4">
              <div className="d-flex gap-3 mb-4">
                <GraduationCap className="icon-soft flex-shrink-0" size={30} />
                <div>
                  <h2 className="h4 text-white fw-bold mb-2">
                    {personalInfo.title}
                  </h2>
                  <p className="lead-dark mb-0">
                    Construyo interfaces modernas con Next.js, React,
                    Bootstrap y buenas practicas de optimizacion para SEO.
                  </p>
                </div>
              </div>
              <p className="lead-dark">
                Mi enfoque esta en crear aplicaciones claras, rapidas y faciles
                de usar. Trabajo cuidando la estructura del contenido, los meta
                tags, el sitemap y los detalles necesarios para publicar en
                InfinityFree.
              </p>
              <p className="lead-dark mb-0">
                Este portafolio resume proyectos, informacion profesional,
                contacto y archivos tecnicos para que el sitio pueda ser
                rastreado correctamente por buscadores.
              </p>
            </div>

            <section>
              <div className="d-flex align-items-center gap-3 mb-4">
                <Code2 className="icon-soft" size={28} />
                <h2 className="h3 text-white fw-bold mb-0">
                  Habilidades Tecnicas
                </h2>
              </div>
              <div className="row g-3">
                {skills.map((skill) => (
                  <div className="col-sm-6 col-lg-4" key={skill}>
                    <div className="dark-panel p-3 h-100 d-flex align-items-center gap-2">
                      <BadgeCheck className="icon-soft" size={18} />
                      <span className="text-white fw-semibold">{skill}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
