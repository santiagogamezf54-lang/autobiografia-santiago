import { SiteHeader } from "@/components/SiteHeader";
import { hero, sections, site } from "@/content";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        {site.skipToContent}
      </a>
      <SiteHeader />
      <main id="contenido">
        <header className={styles.hero} id="inicio">
          <div className={styles.heroInner}>
            <p className={styles.kicker}>{hero.kicker}</p>
            <h1 className={styles.title}>
              <span className={styles.titleLead}>Santiago</span>
              <span className={styles.titleRest}>Gamez Fernández</span>
            </h1>
            <p className={styles.lead}>{hero.lead}</p>
            <p className={styles.meta}>
              <span className={styles.metaLabel}>Nacimiento</span>
              <time dateTime="2007-03-20">{hero.meta}</time>
            </p>
          </div>
          <svg
            className={styles.ornament}
            viewBox="0 0 220 80"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M8 62 C 48 8, 92 8, 132 42 C 158 64, 186 68, 212 38"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <circle cx="28" cy="48" r="3.2" fill="currentColor" />
          </svg>
        </header>

        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className={styles.section}
            aria-labelledby={`${section.id}-title`}
          >
            <header className={styles.sectionHead}>
              <p className={styles.number} aria-hidden="true">
                {section.number}
              </p>
              <h2 id={`${section.id}-title`} className={styles.sectionTitle}>
                {section.title}
              </h2>
            </header>
            <div className={styles.sectionBody}>
              {section.blocks.map((block) => (
                <article key={block.heading ?? block.paragraphs[0]} className={styles.block}>
                  {block.heading ? (
                    <h3 className={styles.blockTitle}>{block.heading}</h3>
                  ) : null}
                  {block.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
      <footer className={styles.footer}>
        <p>{site.footer}</p>
      </footer>
    </>
  );
}
