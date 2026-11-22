import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "../../components/print-button";
import { Arrow } from "../../components/site";
import { experience, openSource, profile, projects, skillGroups } from "../../content";
import { siteUrl } from "../../site-url";

const description = "Chirag Chandel’s résumé, including software development experience, selected projects, and technical skills.";

export const metadata: Metadata = {
  title: "Résumé",
  description,
  alternates: siteUrl ? { canonical: "/resume" } : undefined,
  openGraph: { title: `Résumé | ${profile.name}`, description, url: siteUrl ? "/resume" : undefined },
};

const selectedProjects = projects.filter((project) => ["chit-chat", "supperfastshop", "be2gether", "chess", "snapper"].includes(project.slug));

export default function ResumePage() {
  return (
    <main className="container resume-page" id="main">
      <div className="resume-toolbar">
        <Link className="text-link" href="/"><Arrow direction="left" /> Portfolio</Link>
        <PrintButton />
      </div>
      <article className="resume-paper" aria-label="Résumé">
        <header className="resume-header">
          <h1>{profile.name}</h1>
          <p className="resume-role">{profile.title}</p>
          <p>{profile.location}</p>
          <p className="resume-links">
            <a href={profile.linkedin}>LinkedIn</a>
            <a href={profile.github}>GitHub</a>
          </p>
        </header>

        <section>
          <h2>Experience</h2>
          <h3>Peacock India</h3>
          <ul>{experience.map((item) => <li key={item.name}><strong>{item.name}.</strong> {item.description}</li>)}</ul>
        </section>
        <section>
          <h2>Selected projects</h2>
          <ul>{selectedProjects.map((project) => (
            <li key={project.slug}><strong><a href={project.repository}>{project.name}</a>.</strong> {project.summary}</li>
          ))}</ul>
        </section>
        <section>
          <h2>Open source</h2>
          <p><strong><a href={openSource.url}>{openSource.name}</a>.</strong> {openSource.description}</p>
        </section>
        <section>
          <h2>Technical skills</h2>
          <ul>{skillGroups.map((group) => (
            <li key={group.name}><strong>{group.name}.</strong> {group.skills.join(", ")}</li>
          ))}</ul>
        </section>
        <section>
          <h2>Education</h2>
          <p>{profile.education}</p>
        </section>
      </article>
    </main>
  );
}
