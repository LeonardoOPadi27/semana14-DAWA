# Despliegue en InfinityFree

Este proyecto esta preparado para exportarse como sitio estatico y subirse a InfinityFree.

## Generar archivos

```powershell
npm run build
```

El build genera la carpeta:

```txt
out/
```

## Subir a InfinityFree

1. Entra al panel de InfinityFree.
2. Abre tu sitio `leonardopadilla.xo.je`.
3. Ve a **File Manager**.
4. Entra a la carpeta:

```txt
htdocs
```

5. Borra los archivos de bienvenida que existan dentro de `htdocs`.
6. Sube todo el contenido de la carpeta local `out/`, no la carpeta `out` completa.

Ejemplo: dentro de `htdocs` deben quedar archivos como:

```txt
index.html
robots.txt
sitemap.xml
_next/
about/
contact/
projects/
```

## Rutas para capturas del laboratorio

```txt
https://leonardopadilla.xo.je/
https://leonardopadilla.xo.je/projects/
https://leonardopadilla.xo.je/projects/ecommerce-platform/
https://leonardopadilla.xo.je/about/
https://leonardopadilla.xo.je/contact/
https://leonardopadilla.xo.je/sitemap.xml
https://leonardopadilla.xo.je/robots.txt
```

Si usas otro dominio, cambia `NEXT_PUBLIC_SITE_URL` antes del build:

```powershell
$env:NEXT_PUBLIC_SITE_URL="https://tu-dominio"
npm run build
```
