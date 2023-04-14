import { ProjectCard } from "@/components/Home/ItemList";
import { ItemListItem } from "@/lib/models";
import { client, usePreview } from "@/lib/sanity";
import groq from "groq";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PreviewSuspense } from "next-sanity/preview";
import Head from "next/head";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import { FC } from "react";
import { IoChevronForward } from "react-icons/io5";

const query = groq`
    *[ _type == "category" && $slug == slug.current ][0]{_id, "items": *[_type=='post' && references(^._id)]{
    _id,"tags":tags[]->title, slug , title, description, "coverImage": coverImage.asset->{url,metadata{dimensions}}
  } , slug ,title, description}
  `;
interface Params extends ParsedUrlQuery {
  slug: string;
}

const Header: FC<{ title: string; description: string; count?: number }> = ({
  title,
  description,
  count,
}) => {
  return (
    <>
      <h1 className=" text-3xl font-semibold">
        {title} ({count ?? "Previewing"})
      </h1>
      <h2 className=" text-xl mt-1 text-gray-400">{description}</h2>
    </>
  );
};

const PostList: FC<{ posts: Array<ItemListItem> }> = ({ posts }) => {
  return (
    <section className=" grid grid-cols-1 md:grid-cols-3 mt-8 md:gap-12">
      {posts.map((posts) => (
        <ProjectCard autoFillWidth path="/post" item={posts} key={posts._id} />
      ))}
    </section>
  );
};

const PreviewContent: FC<{ slug: string }> = ({ slug }) => {
  const catalog = usePreview(null, query, { slug });
  return (
    <>
      <Link
        className="bg-blue-500 p-6 text-white font-bold fixed bottom-0 right-0"
        href="/api/exit-preview"
      >
        Exit Preview
      </Link>
      <Header description={catalog.description} title={catalog.title} />
      <PostList posts={catalog.items} />
    </>
  );
};

const Catalog: NextPage<{
  catalog: ItemListItem;
  posts: Array<ItemListItem>;
  preview: boolean;
  slug: string;
}> = ({ catalog, posts, preview, slug }) => {
  if (!catalog && !preview) return null;
  return (
    <div className="max-w-[1000px] mx-auto  mt-32 px-4 md:px-6">
      {!preview && (
        <Head>
          <title>{catalog.title} - Eric Wei</title>
          <meta name="description" content={catalog.description} />
        </Head>
      )}

      {preview ? (
        <PreviewSuspense fallback="Loading...">
          <PreviewContent slug={slug} />
        </PreviewSuspense>
      ) : (
        <>
          <Header
            title={catalog.title}
            count={catalog.items?.length}
            description={catalog.description ?? ""}
          />
          <PostList posts={catalog.items!} />
        </>
      )}
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

  if (context.preview) {
    return {
      props: {
        catalog: null,
        posts: [],
        preview: true,
        slug: slug,
      },
    };
  }

  const catalog = await client.fetch(query, { slug });

  if (!catalog) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      catalog,
      preview: false,
      slug: slug,
    },
    revalidate: 100,
  };
};

export default Catalog;
