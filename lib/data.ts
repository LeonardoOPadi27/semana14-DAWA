import type { Project } from "@/types";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://leonardo-padilla.vercel.app";

export const personalInfo = {
  name: "Leonardo Padilla",
  title: "Desarrollador Web Full Stack",
  description:
    "Portafolio personal orientado a proyectos web modernos, rendimiento, SEO tecnico y experiencias digitales claras para los usuarios.",
  siteUrl,
  avatar: "https://i.redd.it/ncwfaqmwfvte1.jpeg",
  github: "https://github.com/LeonardoOPadi27",
  linkedin: "https://www.linkedin.com/in/leonardo-padilla",
  email: "leonardo.olortegui@tecsup.edu.pe",
};

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "Ecommerce Platform",
    description:
      "Plataforma de comercio electronico con catalogo de productos, carrito de compras, pagos simulados y panel administrativo.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Next.js", "TypeScript", "Bootstrap", "PostgreSQL"],
    demoUrl: "https://example.com/ecommerce-platform",
    githubUrl: "https://github.com/LeonardoOPadi27/ecommerce-platform",
    featured: true,
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    description:
      "Aplicacion para organizar tareas, asignar prioridades y visualizar el avance de equipos mediante tableros interactivos.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://example.com/task-management-app",
    githubUrl: "https://github.com/LeonardoOPadi27/task-management-app",
    featured: true,
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description:
      "Dashboard de analitica con indicadores clave, graficos comparativos y visualizacion de datos para decisiones rapidas.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Next.js", "Chart.js", "Bootstrap", "API REST"],
    demoUrl: "https://example.com/analytics-dashboard",
    githubUrl: "https://github.com/LeonardoOPadi27/analytics-dashboard",
    featured: true,
  },
  {
    slug: "portfolio-seo",
    title: "Portfolio SEO",
    description:
      "Sitio personal optimizado con meta tags dinamicos, sitemap, robots.txt e imagenes con carga diferida.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Next.js", "SEO", "Open Graph", "Vercel"],
    demoUrl: "https://example.com/portfolio-seo",
    githubUrl: "https://github.com/LeonardoOPadi27/portfolio-seo",
    featured: false,
  },
];
