import { ptComponents } from "@/components/ptComponents";
import { Project } from "@/lib/models";
import { client, usePreview } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import groq from "groq";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PreviewSuspense } from "next-sanity/preview";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import { FC } from "react";

import { BiLinkExternal } from "react-icons/bi";
import { IoChevronForward } from "react-icons/io5";

const query = groq`
   *[ _type == "project" && $slug == slug.current ][0]{_id, slug ,body ,link,"tags": tags[]->title, title, description, "coverImage": coverImage.asset->{url,metadata{dimensions}}}
    `;

interface Params extends ParsedUrlQuery {
  slug: string;
}

const Navbar: FC = () => {
  return (
    <div className="mb-2 flex items-center">
      <Link
        href="/"
        className="text-gray-500 hover:text-gray-400 cursor-pointer font-medium"
      >
        Home
      </Link>
      <IoChevronForward className=" text-gray-400" />
      <Link
        href={`/project`}
        className=" text-gray-500 hover:text-gray-400 cursor-pointer font-medium"
      >
        Projects
      </Link>
    </div>
  );
};

const ProjectContent: FC<{ project: Project }> = ({ project }) => {
  return (
    <>
      <div className="bg-white mt-2 px-4 gap-8 flex flex-col md:grid grid-cols-2 py-4 rounded-md ">
        <Image
          className=" object-cover w-full h-[220px]  md:h-[300px] rounded-md"
          src={project.coverImage.url}
          height={project.coverImage.metadata.dimensions.height}
          width={project.coverImage.metadata.dimensions.width}
          alt={project.title + "cover image"}
        />

        <div className="mt-2">
          <h1 className="font-semibold text-2xl">{project.title}</h1>
          <div className="flex flex-wrap gap-3  mt-4">
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className="text-sm bg-gray-100 text-gray-500 px-3 py-2 rounded-lg font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            className=" flex items-center gap-2 mt-6 font-medium text-blue-500"
            href={project.link}
          >
            <BiLinkExternal /> Launch Project
          </a>

          <div className=" mt-4 pt-4 border-t">
            <p className=" text-gray-500">{project.description}</p>
          </div>
        </div>
      </div>

      {project.body && (
        <div className="mt-4 px-8 py-4 rounded-md bg-white">
          <article className="md:prose prose-sm ">
            <PortableText value={project.body} components={ptComponents} />
          </article>
        </div>
      )}
    </>
  );
};

const PreviewProject: FC<{ query: string; slug: string }> = ({
  query,
  slug,
}) => {
  const project = usePreview(null, query, { slug });
  return (
    <>
      {project && <ProjectContent project={project} />}
      <Link
        className="bg-blue-500 p-6 text-white font-bold fixed bottom-0 right-0"
        href="/api/exit-preview"
      >
        Exit Preview
      </Link>
    </>
  );
};

const ProjectPage: NextPage<{
  preview: boolean;
  data?: {
    project: Project;
    slug: string;
  };
}> = ({ preview, data }) => {
  return (
    <div className="max-w-[1000px] px-4 md:px-6  mx-auto gap-5 mt-32">
      <Navbar />
      {data?.project && (
        <Head>
          <title>{data.project.title} - Eric Wei</title>
          <meta name="description" content={data.project.description} />
        </Head>
      )}

      {preview && data?.slug ? (
        <PreviewSuspense fallback="Loading...">
          <PreviewProject slug={data?.slug} query={query} />
        </PreviewSuspense>
      ) : (
        data?.project && <ProjectContent project={data.project} />
      )}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "project" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (context.preview) {
    return {
      props: {
        preview: context.preview ?? false,
        data: {
          project: null,
          slug: context.params?.slug as string,
        },
      },
    };
  }

  const { slug = "" } = context.params as Params;
  const project = await client.fetch(query, { slug });

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      preview: context.preview ?? false,
      data: {
        project,
        slug,
      },
    },
    revalidate: 100,
  };
};

export default ProjectPage;
