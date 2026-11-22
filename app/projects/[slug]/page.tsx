import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, Tags } from "../../../components/site";
import { profile, projects } from "../../../content";
import { siteUrl } from "../../../site-url";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();

  const path = `/projects/${slug}`;
  return {
    title: project.name,
    description: project.summary,
    alternates: siteUrl ? { canonical: path } : undefined,
    openGraph: {
      title: `${project.name} | ${profile.name}`,
      description: project.summary,
      url: siteUrl ? path : undefined,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();

  return (
    <main className="container detail-page" id="main">
      <Link className="text-link back-link" href="/#work"><Arrow direction="left" /> All projects</Link>
      <header className="detail-header">
        <p className="eyebrow">{project.category}</p>
        <h1>{project.name}<span>.</span></h1>
        <p>{project.summary}</p>
        <a className="button primary" href={project.repository}>View source on GitHub <Arrow /></a>
      </header>
      {project.cover && (
        <div className={`detail-cover ${project.cover.theme}`}>
          <Image src={project.cover.src} alt={project.cover.alt} width={project.cover.width} height={project.cover.height} priority unoptimized />
        </div>
      )}
      <div className="detail-content">
        <section>
          <h2>Overview</h2>
          <p>{project.overview}</p>
          <h2>What I built</h2>
          <ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
        </section>
        <aside aria-label="Project stack">
          <h2>Stack</h2>
          <Tags items={project.stack} />
        </aside>
      </div>
    </main>
  );
}
