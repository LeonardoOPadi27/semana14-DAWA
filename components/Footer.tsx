import { Code2, ExternalLink, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="site-footer py-4">
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} {personalInfo.name}. Todos los
            derechos reservados.
          </p>
          <div className="d-flex align-items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link-dark d-inline-flex align-items-center gap-2"
              aria-label="GitHub"
            >
              <Code2 size={18} aria-hidden="true" />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link-dark d-inline-flex align-items-center gap-2"
              aria-label="LinkedIn"
            >
              <ExternalLink size={18} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="nav-link-dark d-inline-flex align-items-center gap-2"
              aria-label="Email"
            >
              <Mail size={18} aria-hidden="true" />
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
