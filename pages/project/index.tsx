import { ProjectCard } from "@/components/Home/ItemList";
import { ItemListItem } from "@/lib/models";
import { client } from "@/lib/sanity";
import groq from "groq";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

const ProjectListPage: NextPage<{ projects: Array<ItemListItem> }> = ({
  projects,
}) => {
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
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await client.fetch(groq`
    *[ _type == "project"]{_id,"tags":tags[]->title, slug , title, description, "coverImage": coverImage.asset->{url,metadata{dimensions}}}
  `);
  return {
    props: {
      projects,
    },
    revalidate: 100,
  };
};

export default ProjectListPage;
