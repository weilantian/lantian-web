import { ProjectCard } from "@/components/Home/ItemList";
import { ItemListItem } from "@/lib/models";
import { client } from "@/lib/sanity";
import groq from "groq";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import { FC } from "react";
import { IoChevronForward } from "react-icons/io5";

interface Params extends ParsedUrlQuery {
  slug: string;
}

const Catalog: NextPage<{ catalog: ItemListItem; posts: Array<ItemListItem> }> =
  ({ catalog, posts }) => {
    if (!catalog) return null;
    return (
      <div className="max-w-[1000px] mx-auto  mt-32 px-4 md:px-6">
        <h1 className=" text-3xl font-semibold">
          {catalog.title} ({posts.length})
        </h1>
        <h2 className=" text-xl mt-1 text-gray-400">{catalog.description}</h2>
        <section className=" grid grid-cols-1 md:grid-cols-3 mt-8 md:gap-12">
          {posts.map((posts) => (
            <ProjectCard
              autoFillWidth
              path="/post"
              item={posts}
              key={posts._id}
            />
          ))}
        </section>
      </div>
    );
  };

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(groq`
  *[ _type == "category" && defined(slug.current)][].slug.current
  `);
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug = "" } = context.params as Params;
  const catalog = await client.fetch(
    groq`
  *[ _type == "category" && $slug == slug.current ][0]{_id, slug ,title, description}
  `,
    { slug }
  );

  const posts = await client.fetch(groq`
     *[ _type == "post"]{_id,"tags":tags[]->title, slug , title, description, "coverImage": coverImage.asset->{url,metadata{dimensions}}}
  `);
  return {
    props: {
      catalog,
      posts,
    },
  };
};

export default Catalog;
