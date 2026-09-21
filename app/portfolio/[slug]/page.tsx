import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject } from "../../data/portfolio";
import ProjectClient from "./ProjectClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study | ${project.client}`,
    description: project.summary,
    alternates: {
      canonical: `https://fourthedtion.vercel.app/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — Case Study | Fourth Edition`,
      description: project.summary,
      url: `https://fourthedtion.vercel.app/portfolio/${project.slug}`,
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 675,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Case Study | Fourth Edition`,
      description: project.summary,
      images: [project.coverImage],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return <ProjectClient project={project} />;
}
