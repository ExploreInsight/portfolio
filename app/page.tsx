import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Tags } from "../components/site";
import { experience, openSource, profile, projects, skillGroups } from "../content";
import { siteUrl } from "../site-url";

export const metadata: Metadata = {
  alternates: siteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.description,
    siteName: profile.name,
    type: "profile",
    firstName: "Chirag",
    lastName: "Chandel",
    url: siteUrl,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: siteUrl,
  description: profile.description,
  worksFor: { "@type": "Organization", name: "Peacock India" },
  alumniOf: { "@type": "EducationalOrganization", name: profile.education },
  sameAs: [profile.linkedin, profile.github, profile.workGithub],
};

const layers = [
  { symbol: "‹/›", name: "Interface", detail: "React · Next.js", className: "top" },
  { symbol: "↔", name: "API", detail: "TypeScript · Node.js", className: "middle" },
  { symbol: "≡", name: "Data", detail: "PostgreSQL · MongoDB", className: "bottom" },
];

export default function HomePage() {
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }} />
      <div className="container">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow role"><span /> {profile.title}</p>
            <h1 id="hero-title">Chirag<br />Chandel<span>.</span></h1>
            <p className="intro">{profile.description}</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">Explore my work <Arrow direction="down" /></a>
              <Link className="button secondary" href="/resume">View résumé <Arrow /></Link>
            </div>
            <p className="hero-location"><span aria-hidden="true">◎</span> {profile.location}</p>
          </div>
          <figure className="stack-panel" aria-label="Full-stack technologies from interface to API and data">
            <div className="stack-header">
              <span><i /> Full-stack development</span>
            </div>
            <div className="stack-stage">
              <div className="stack-grid" aria-hidden="true" />
              <div className="stack-rail" aria-hidden="true" />
              <ol className="stack-layers">
                {layers.map((layer) => (
                  <li key={layer.name} className={`layer-row ${layer.className}`}>
                    <div className="layer-tile" aria-hidden="true"><span>{layer.symbol}</span></div>
                    <div className="layer-label"><strong>{layer.name}</strong><span>{layer.detail}</span></div>
                  </li>
                ))}
              </ol>
            </div>
          </figure>
        </section>

        <section id="work" className="section work-section" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Personal work</p>
              <h2 id="work-title">Selected projects</h2>
            </div>
            <a href={profile.github} className="text-link">All repositories <Arrow /></a>
          </div>
          <div className="project-grid">
            {projects.map((project) => project.cover && (
              <article className="project-card" key={project.slug}>
                <Link className={`project-cover ${project.cover.theme}`} href={`/projects/${project.slug}`} aria-label={`View ${project.name} project`}>
                  <div className="screen">
                    <div className="screen-bar" aria-hidden="true"><i /><i /><i /></div>
                    <Image src={project.cover.src} alt={project.cover.alt} fill sizes="(max-width: 720px) 90vw, 45vw" unoptimized />
                  </div>
                </Link>
                <div className="card-body">
                  <p className="eyebrow card-category">{project.category}</p>
                  <h3><Link href={`/projects/${project.slug}`}>{project.name} <Arrow /></Link></h3>
                  <p>{project.summary}</p>
                  <Tags items={project.stack.slice(0, 3)} />
                  {project.liveUrl && <a className="text-link card-live" href={project.liveUrl} aria-label={`Open ${project.name} live app`}>Live app <Arrow /></a>}
                </div>
              </article>
            ))}
          </div>

          <div className="more-projects">
            <h3>More projects</h3>
            <ul>
              {projects.filter((project) => !project.cover).map((project) => (
                <li key={project.slug}>
                  <Link className="more-project-link" href={`/projects/${project.slug}`}>
                    {project.icon && <Image src={project.icon} alt="" width={36} height={36} className="more-project-icon" />}
                    <span className="more-project-text"><strong>{project.name}</strong><span>{project.summary}</span></span>
                    <Arrow />
                  </Link>
                  {project.liveUrl && <a className="text-link" href={project.liveUrl} aria-label={`Open ${project.name} live app`}>Live app <Arrow /></a>}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Professional work</p>
              <h2 id="experience-title">Experience</h2>
            </div>
            <Link href="/resume" className="text-link">Full résumé <Arrow /></Link>
          </div>
          <div className="experience-grid">
            <div className="experience-employer">
              <h3>Peacock India</h3>
              <p>Full-stack development across web, desktop, and mobile products.</p>
            </div>
            <div className="experience-list">
              {experience.map((item) => (
                <article key={item.name}>
                  <p className="eyebrow">{item.scope}</p>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section skills-section" aria-labelledby="skills-title">
          <div className="section-heading">
            <h2 id="skills-title">Tools I work with</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div key={group.name}>
                <h3>{group.name}</h3>
                <Tags items={group.skills} />
              </div>
            ))}
          </div>
          <p className="open-source"><strong>Open source</strong><span>{openSource.description}</span><a className="text-link" href={openSource.url}>{openSource.name} PR <Arrow /></a></p>
        </section>

        <section className="contact" aria-labelledby="contact-title">
          <div><p className="eyebrow">Contact</p><h2 id="contact-title">Let’s connect.</h2></div>
          <a className="button contact-button" href={profile.linkedin}>Message me on LinkedIn <Arrow /></a>
        </section>
      </div>
    </main>
  );
}
