import { GetStaticProps, NextPage } from "next";
import groq from "groq";
import { ParsedUrlQuery } from "querystring";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Head from "next/head";

interface Params extends ParsedUrlQuery {
  slug: string;
}

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value)
            .width(320)
            .height(240)
            .fit("max")
            .auto("format")
            .url()}
        />
      );
    },
  },
};

const BlogPage: NextPage<{
  post: {
    title: string;
    categories: string[];
    coverImage: string;
    body: [];
  };
}> = ({ post }) => {
  const { title, categories, coverImage, body } = post
    ? post
    : {
        title: "Missing Title",
        categories: [],
        coverImage: "",
        body: [],
      };
  return (
    <div>
      <Head>
        <title>{title} - Lantian Wei</title>
      </Head>
      <div className=" container px-32">
        <div>
          <h1 className="text-4xl font-bold">{title}</h1>
          <div className="flex flex-wrap">
            {categories.map((category) => (
              <span
                key={category}
                className="text-sm text-gray-500 font-semibold"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <article className="prose lg:prose-xl">
          <PortableText value={body} components={ptComponents} />
        </article>
      </div>
    </div>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "categories": categories[]->title,
  "coverImage": coverImage.asset->url,
  body,
}`;

export const getStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug = "" } = context.params as Params;
  const post = await client.fetch(query, { slug });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 100,
  };
};

export default BlogPage;
