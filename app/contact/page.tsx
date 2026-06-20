import type { Metadata } from "next";
import { Code2, ExternalLink, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contacta a ${personalInfo.name} para proyectos web, colaboraciones o consultas profesionales.`,
  openGraph: {
    title: "Contacto - Portafolio",
    description: `Comunicate con ${personalInfo.name} para nuevos proyectos web.`,
    images: [personalInfo.avatar],
  },
};

const contactItems = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "LeonardoOPadi27",
    href: personalInfo.github,
    icon: Code2,
  },
  {
    label: "LinkedIn",
    value: "Leonardo Padilla",
    href: personalInfo.linkedin,
    icon: ExternalLink,
  },
];

export default function ContactPage() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <p className="eyebrow mb-2">Contacto</p>
            <h1 className="text-white fw-bold mb-3">Trabajemos juntos</h1>
            <p className="lead-dark fs-5 mb-5">
              Puedes escribirme para conversar sobre nuevos proyectos,
              colaboraciones o mejoras para aplicaciones web.
            </p>

            <div className="row g-4">
              {contactItems.map((item) => (
                <div className="col-md-4" key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      item.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="contact-card h-100 d-block p-4"
                  >
                    <item.icon className="icon-soft mb-4" size={30} />
                    <span className="d-block text-white fw-semibold mb-2">
                      {item.label}
                    </span>
                    <span className="d-block lead-dark text-break">
                      {item.value}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
