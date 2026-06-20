# Despliegue en Vercel

1. Sube el proyecto a GitHub.
2. En Vercel, crea un proyecto nuevo e importa el repositorio.
3. En Environment Variables agrega:

```txt
NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
```

4. Despliega el proyecto.
5. Cuando tengas un dominio personalizado, vuelve a Vercel > Project Settings > Domains y agrega el dominio.
6. Actualiza `NEXT_PUBLIC_SITE_URL` con el dominio final y redeploy.

Rutas para capturas del laboratorio:

```txt
/
/projects
/projects/ecommerce-platform
/about
/contact
/sitemap.xml
/robots.txt
```
