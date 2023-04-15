import { GetStaticProps, NextPage } from "next";
import groq from "groq";
import { ParsedUrlQuery } from "querystring";
import { client, urlFor, usePreview } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Head from "next/head";
import { IoChevronForward } from "react-icons/io5";
import { FC } from "react";
import Link from "next/link";
import { Post, Slug } from "@/lib/models";
import { PreviewSuspense } from "next-sanity/preview";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

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
            className="w-full py-4 h-[200px] object-cover"
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

const BlogContent: FC<{ post: Post }> = ({
  post: { tags, body, category, title, coverImage, publishedAt },
}) => {
  return (
    <>
      <div className="w-full  bg-white rounded-xl px-8 py-8">
        <Navbar category={category} />
        <div className="mt-4">
          {coverImage ? (
            <Image
              className="rounded-lg object-cover h-[260px]"
              alt={title + " cover image" || " "}
              height={coverImage.metadata.dimensions.height}
              width={coverImage.metadata.dimensions.width}
              src={coverImage.url}
            />
          ) : (
            <div className="rounded-lg object-cover h-[260px] bg-gray-100"></div>
          )}
        </div>
        <h1 className=" mt-6 font-semibold text-3xl md:text-4xl">{title}</h1>
        <p className="mt-2 text-gray-500">{formatDate(publishedAt)}</p>
        <div className="flex flex-wrap gap-3  mt-4">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-500 px-3 py-2 rounded-lg font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
        <article className="mt-8 pt-6 border-gray-200 prose-sm  md:prose  max-w-none   border-t">
          <PortableText value={body} components={ptComponents} />
        </article>
      </div>
    </>
  );
};

const PreviewContent: FC<{ slug: string }> = ({ slug }) => {
  const post = usePreview(null, query, { slug });
  return (
    <>
      <BlogContent post={post} />
      <Link
        className="bg-blue-500 p-6 text-white font-bold fixed bottom-0 right-0"
        href="/api/exit-preview"
      >
        Exit Preview
      </Link>
    </>
  );
};

const BlogPage: NextPage<{
  post: Post;
  preview: boolean;
  slug: string;
}> = ({ post, preview, slug }) => {
  const { title, category, tags, coverImage, body, description } = post ?? {};
  return (
    <div className="max-w-[1000px] px-4 md:px-6  mx-auto gap-5 mt-32">
      {!preview && (
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Head>
      )}
      {preview ? (
        <PreviewSuspense fallback="Loading...">
          <PreviewContent slug={slug} />
        </PreviewSuspense>
      ) : (
        post && <BlogContent post={post} />
      )}
    </div>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  description,
  "category": category->{title, slug},
  "coverImage": coverImage.asset->{url,caption,metadata},
  "tags": tags[]->title,
  body,
  publishedAt,
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

  if (context.preview) {
    return {
      props: {
        preview: true,
        post: null,
        slug: slug,
      },
    };
  }

  const post = await client.fetch(query, { slug });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      preview: false,
    },
    revalidate: 100,
  };
};

export default BlogPage;
