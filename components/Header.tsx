import Link from "next/link";
import { BriefcaseBusiness, Code2, Home, Mail, UserRound } from "lucide-react";
import { personalInfo } from "@/lib/data";

const navItems = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/projects", label: "Proyectos", icon: BriefcaseBusiness },
  { href: "/about", label: "Sobre Mi", icon: UserRound },
  { href: "/contact", label: "Contacto", icon: Mail },
];

export default function Header() {
  return (
    <header className="site-header sticky-top">
      <nav className="container py-3">
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
          <Link
            href="/"
            className="d-inline-flex align-items-center gap-2 fs-5 fw-bold text-white"
          >
            <span className="brand-mark d-inline-flex align-items-center justify-content-center">
              <Code2 size={20} aria-hidden="true" />
            </span>
            {personalInfo.name}
          </Link>
          <ul className="nav gap-2 gap-md-4">
            {navItems.map((item) => (
              <li key={item.href} className="nav-item">
                <Link
                  href={item.href}
                  className="nav-link-dark d-inline-flex align-items-center gap-2"
                >
                  <item.icon size={16} aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
