export type NavItem = {
  id: string;
  label: string;
};

export type ContentBlock = {
  heading?: string;
  paragraphs: string[];
};

export type Section = {
  id: string;
  number: string;
  title: string;
  blocks: ContentBlock[];
};

export const site = {
  name: "Santiago Gamez Fernández",
  shortName: "SGF",
  lang: "es",
  title: "Santiago Gamez Fernández — Autobiografía",
  description:
    "Autobiografía de Santiago Gamez Fernández: quién soy, mi historia, mi formación, mis intereses, mi vida actual y mi futuro.",
  skipToContent: "Saltar al contenido",
  footer: "Santiago Gamez Fernández. Autobiografía en una sola página.",
};

export const nav: NavItem[] = [
  { id: "quien-soy", label: "Quién soy" },
  { id: "mi-historia", label: "Mi historia" },
  { id: "mi-formacion", label: "Mi formación" },
  { id: "mis-intereses", label: "Mis intereses" },
  { id: "mi-vida-actual", label: "Mi vida actual" },
  { id: "mi-futuro", label: "Mi futuro" },
];

export const hero = {
  kicker: "Autobiografía",
  name: "Santiago Gamez Fernández",
  lead: "Nací el 20 de marzo de 2007. Soy el hermano mayor —tengo una hermana— y desde chico me han acompañado dos cosas: los computadores y el fútbol.",
  meta: "20 de marzo de 2007",
};

export const sections: Section[] = [
  {
    id: "quien-soy",
    number: "01",
    title: "Quién soy",
    blocks: [
      {
        heading: "Nombre",
        paragraphs: ["Santiago Gamez Fernández"],
      },
      {
        heading: "Presentación",
        paragraphs: [
          "Me llamo Santiago Gamez Fernández. Nací el 20 de marzo de 2007. Soy el mayor de dos: tengo una hermana.",
          "Desde la infancia me gustaron los computadores. Más adelante entrené fútbol hasta llegar a un torneo nacional, a los dieciséis, y después dejé ese camino para concentrarme en lo académico.",
        ],
      },
    ],
  },
  {
    id: "mi-historia",
    number: "02",
    title: "Mi historia",
    blocks: [
      {
        heading: "Infancia",
        paragraphs: [
          "Mis primeros años empezaron en la Ciudadela, cerca del estadio. No me quedé mucho tiempo. Después nos mudamos a Barrio El Parque y ahí crecí hasta los seis años.",
          "Luego nos fuimos al barrio donde vivo todavía: ahí se formó la mayor parte de mi vida y conocí a personas que siguen siendo parte de ella hoy.",
        ],
      },
      {
        heading: "Familia",
        paragraphs: ["Soy el hermano mayor y tengo una hermana."],
      },
      {
        heading: "Momentos importantes",
        paragraphs: [
          "A los siete años usaba un PC cuya fuente de poder era externa y pateaba más duro que una nevera vieja. Con todo y patada, ese computador fue el comienzo de un gusto que no se me ha ido.",
          "A los dieciséis, el fútbol me llevó a un torneo nacional. Me retiré de ese camino para enfocarme en mi vida académica.",
        ],
      },
    ],
  },
  {
    id: "mi-formacion",
    number: "03",
    title: "Mi formación",
    blocks: [
      {
        heading: "Estudios",
        paragraphs: [
          "Después del fútbol elegí lo académico. Hoy mi formación pasa, sobre todo, por estudiar programación todos los días.",
        ],
      },
      {
        heading: "Aprendizajes importantes",
        paragraphs: [
          "El aprendizaje que más me marca viene de lejos: desde chico me gustaron los computadores. Ese PC de los siete años —fuente externa y patada de nevera vieja— me dejó claro que esto me importaba.",
          "Dejar el fútbol competitivo para concentrarme en estudiar también fue una decisión que me formó.",
        ],
      },
    ],
  },
  {
    id: "mis-intereses",
    number: "04",
    title: "Mis intereses",
    blocks: [
      {
        heading: "Hobbies",
        paragraphs: [
          "Mis hobbies son los de siempre: jugar fútbol, pasar tiempo con mi novia y estudiar programación todos los días.",
        ],
      },
      {
        heading: "Deportes",
        paragraphs: [
          "El deporte que más me ha marcado es el fútbol. Entrené hasta llegar a un torneo nacional; hoy lo sigo jugando porque me gusta, no como carrera.",
        ],
      },
      {
        heading: "Tecnología",
        paragraphs: [
          "La tecnología me acompaña desde la infancia. Los computadores fueron lo primero que me enganchó, y ahora estudio programación todos los días.",
        ],
      },
    ],
  },
  {
    id: "mi-vida-actual",
    number: "05",
    title: "Mi vida actual",
    blocks: [
      {
        heading: "Qué hago ahora",
        paragraphs: [
          "Hoy trabajo como freelance. Sigo con lo de siempre: fútbol, tiempo con mi novia y programación todos los días.",
        ],
      },
      {
        heading: "Proyectos",
        paragraphs: [
          "Ya entregué varios proyectos. Este lunes que viene entrego otro.",
        ],
      },
      {
        heading: "Metas",
        paragraphs: ["Estoy trabajando ahora para un futuro prometedor."],
      },
    ],
  },
  {
    id: "mi-futuro",
    number: "06",
    title: "Mi futuro",
    blocks: [
      {
        heading: "Aspiraciones",
        paragraphs: [
          "Quiero empezar mi propia empresa, comenzando por una startup.",
        ],
      },
      {
        heading: "Objetivos personales o profesionales",
        paragraphs: [
          "Si ese camino no es el primero, el plan es conseguir un trabajo como programador y, después, construir mi negocio.",
          "Sea por un lado o por el otro, estoy trabajando ahora para ese futuro.",
        ],
      },
    ],
  },
];
