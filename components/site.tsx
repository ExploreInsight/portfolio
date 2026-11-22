import Link from "next/link";
import { profile } from "../content";

export function Arrow({ direction = "up" }: { direction?: "up" | "right" | "down" | "left" }) {
  return <span className="arrow" aria-hidden="true">{{ up: "↗", right: "→", down: "↓", left: "←" }[direction]}</span>;
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Chirag Chandel home">
          <span className="brand-mark" aria-hidden="true">cc<span>.</span></span>
          <span className="brand-name">Chirag Chandel</span>
        </Link>
        <nav aria-label="Main navigation" className="nav">
          <Link href="/#work">Work</Link>
          <Link href="/#experience">Experience</Link>
          <Link className="nav-resume" href="/resume">Résumé <Arrow /></Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© 2026 {profile.name}</span>
        <div>
          <a href={profile.github}>GitHub <Arrow /></a>
          <a href={profile.linkedin}>LinkedIn <Arrow /></a>
        </div>
      </div>
    </footer>
  );
}

export function Tags({ items }: { items: string[] }) {
  return <ul className="tags" aria-label="Technologies">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}
