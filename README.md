# Autobiografía de Santiago Gamez Fernández

Sitio de una sola página, en español, con la autobiografía de Santiago Gamez Fernández. Está hecho con Next.js (App Router) y TypeScript.

Las secciones son las del enunciado: **Quién soy**, **Mi historia**, **Mi formación**, **Mis intereses**, **Mi vida actual** y **Mi futuro**.

Todo el texto editable está en [`content.ts`](content.ts). Si hay que corregir un dato, cámbialo ahí: la página no guarda copias sueltas en el JSX.

## Cómo correrlo

Necesitas Node.js 20 o superior.

```bash
npm install
npm run dev
```

Abre [http://localhost:43217](http://localhost:43217). El menú de arriba lleva a cada sección de la misma página.

## Otros comandos

```bash
npm run build
npm run start
npm run lint
```

## Qué no hay que inventar

El texto solo usa los hechos que Santiago escribió. No hay universidad, club, ciudad de nacimiento ni nombres de familiares porque no los dio.
