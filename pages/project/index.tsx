import { ProjectCard } from "@/components/Home/ItemList";
import { ItemListItem } from "@/lib/models";
import { client, usePreview } from "@/lib/sanity";
import groq from "groq";
import { GetStaticProps, NextPage } from "next";
import { PreviewSuspense } from "next-sanity/preview";
import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

const query = groq`
    *[ _type == "project"]{_id,"tags":tags[]->title, slug , title, description, "coverImage": coverImage.asset->{url,metadata{dimensions}}}
  `;

const ProjectList: FC<{ projects: Array<ItemListItem> }> = ({ projects }) => {
  return (
    <section className=" grid grid-cols-1 md:grid-cols-3 mt-8 md:gap-12">
      {projects.map((project) => (
        <ProjectCard
          autoFillWidth
          path="/project"
          item={project}
          key={project._id}
        />
      ))}
    </section>
  );
};

const PreviewProjectList: FC<{ query: string }> = () => {
  const projects = usePreview(null, query);
  return (
    <>
      <ProjectList projects={projects} />
      <Link
        className="bg-blue-500 p-6 text-white font-bold fixed bottom-0 right-0"
        href="/api/exit-preview"
      >
        Exit Preview
      </Link>
    </>
  );
};

const ProjectListPage: NextPage<{
  preview: boolean;
  projects: Array<ItemListItem>;
}> = ({ projects, preview }) => {
  return (
    <div className="max-w-[1000px] mx-auto  mt-32 px-4 md:px-6">
      <h1 className=" text-3xl font-semibold">Projects ({projects.length})</h1>
      <h2 className=" text-xl mt-1 text-gray-400">
        A collection of my projects
      </h2>
      <Head>
        <title>Projects - Eric Wei</title>
        <meta name="description" content="  A collection of my projects" />
      </Head>
      {preview ? (
        <PreviewSuspense fallback="Loading...">
          <PreviewProjectList query={query} />
        </PreviewSuspense>
      ) : (
        <ProjectList projects={projects} />
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  if (preview) {
    return {
      props: {
        preview,
        projects: [],
      },
      revalidate: 100,
    };
  }
  const projects = await client.fetch(query);
  return {
    props: {
      projects,
      preview,
    },
    revalidate: 100,
  };
};

export default ProjectListPage;
