"use client";

import { useEffect, useId, useState } from "react";
import { nav, site } from "@/content";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(nav[0]?.id ?? "");
  const menuId = useId();

  useEffect(() => {
    const nodes = nav
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => node !== null);

    if (nodes.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const id = visible[0]?.target.id;
        if (id) {
          setActive(id);
        }
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    for (const node of nodes) {
      observer.observe(node);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <a className={styles.brand} href="#inicio">
          <span className={styles.mark} aria-hidden="true">
            S
          </span>
          <span className={styles.brandText}>{site.name}</span>
        </a>
        <button
          className={styles.toggle}
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={styles.toggleLabel}>
            {open ? "Cerrar menú" : "Abrir menú"}
          </span>
          <span className={styles.bars} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
        <nav
          id={menuId}
          className={`${styles.nav} ${open ? styles.navOpen : ""}`}
          aria-label="Secciones de la autobiografía"
        >
          <ul className={styles.list}>
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  className={`${styles.link} ${active === item.id ? styles.active : ""}`}
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
