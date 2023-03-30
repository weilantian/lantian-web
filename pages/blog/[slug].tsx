import { GetStaticProps, NextPage } from "next";
import groq from "groq";
import { ParsedUrlQuery } from "querystring";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Head from "next/head";
import { IoChevronForward } from "react-icons/io5";
import { FC } from "react";
import Link from "next/link";
import { Slug } from "@/lib/models";

interface Params extends ParsedUrlQuery {
  slug: string;
}

const ptComponents = {
  block: {
    warning: ({ children }: any) => (
      <div className="bg-yellow-100 not-prose border-l-4  border-yellow-500 text-yellow-700 p-2">
        <p className="font-bold ">Warning</p>
        <p>{children}</p>
      </div>
    ),
  },
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="flex w-full not-prose  bg-gray-50 flex-col rounded-md justify-center">
          <img
            className="w-full w-auto py-4 max-h-[700px] object-contain"
            alt={value.caption || " "}
            loading="lazy"
            src={urlFor(value).url()}
          />

          <span className="text-gray-400 mb-4 mt-1 font-medium text-center text-sm">
            {value.caption}
          </span>
        </div>
      );
    },
  },
};

const Navbar: FC<{
  category: {
    title: string;
    slug: Slug;
  };
}> = ({ category }) => {
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
        href={`/blog/category/${category.slug.current}`}
        className=" text-gray-500 hover:text-gray-400 cursor-pointer font-medium"
      >
        {category.title}
      </Link>
    </div>
  );
};

const BlogPage: NextPage<{
  post: {
    title: string;
    category: {
      title: string;
      slug: Slug;
    };
    tags: Array<string>;
    coverImage: string;
    body: [];
  };
}> = ({ post }) => {
  const { title, category, tags, coverImage, body } = post
    ? post
    : {
        title: "Missing Title",
        category: {
          title: "Missing Category",
          slug: {
            current: "",
          },
        },
        tags: [],
        coverImage: "",
        body: [],
      };
  return (
    <div className="max-w-[1000px] px-4 md:px-6  mx-auto gap-5 mt-32">
      <Head>
        <title>{`${title}`} </title>
      </Head>
      <div className="w-full  bg-white rounded-xl px-8 py-8">
        <Navbar category={category} />
        <h1 className=" mt-4 font-semibold text-4xl">{title}</h1>

        <div className="flex flex-wrap gap-3  mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-sm bg-gray-100 text-gray-500 px-3 py-2 rounded-lg font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        <article className="mt-8 pt-6 border-gray-200 prose-sm  md:prose md:max-w-none max-w-none   border-t">
          <PortableText value={body} components={ptComponents} />
        </article>
      </div>
    </div>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "category": category->{title, slug},
  "coverImage": coverImage.asset->{url,caption},
  "tags": tags[]->title,
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
