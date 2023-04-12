import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import { FC, useEffect } from "react";
import { useSetAtom } from "jotai";
import { navAtom } from "@/states";

const inter = Inter({ subsets: ["latin"] });

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { GetStaticProps, NextPage } from "next";
import { client, urlFor } from "@/lib/sanity";
import { Article, DesignWork, ItemListItem } from "@/lib/models";
import NameCard from "@/components/Home/HomeNameCard";
import ItemList from "@/components/Home/ItemList";
import groq from "groq";
import DesignWorkList from "@/components/Home/DesignWorkList";

const Home: NextPage<{
  articles: Array<Article>;
  caseStudies: Array<ItemListItem>;
  projects: Array<ItemListItem>;
  designWorks: Array<DesignWork>;
}> = ({ caseStudies, projects, designWorks }) => {
  const setNav = useSetAtom(navAtom);
  useEffect(() => {
    setNav((prev) => ({ ...prev, showName: true }));
  }, []);
  return (
    <div className="  max-w-[1000px] px-4 md:px-6  mx-auto gap-5 mt-32 ">
      <NameCard />
      <Head>
        <title>Eric Wei</title>
        <meta
          name="description"
          content="UI Engineer / Designer based in Melbourne."
        />
      </Head>

      <ItemList
        items={caseStudies}
        itemPageOptions={{
          title: "All Case Studies",
          link: "/catalog/case-study",
        }}
        path="/post"
        title="🧐Case Studies"
      />

      <ItemList
        items={projects}
        itemPageOptions={{
          title: "All Projects",
          link: "/project",
        }}
        path="/project"
        title="Projects"
      />

      <DesignWorkList items={designWorks} />

      {/* <div>
        <div className="flex mt-8 justify-between">
          <h3 className=" text-xl font-semibold">Writings</h3>
          <Link className="text-blue-500 group font-medium" href="/blog">
            All Posts
            <IoChevronForwardCircleSharp
              size={18}
              className="inline-block ml-1 duration-75 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
        <div className="mt-2">
          <span className=" font-medium text-sm text-gray-400">Filter</span>
          <div className="inline-flex ml-2 gap-2 mt-2">
            <span className="bg-blue-500 text-white cursor-pointer py-2 rounded-full border px-3 text-xs">
              🎨 Design
            </span>
            <span className="bg-white cursor-pointer py-2 rounded-full border px-3 text-xs">
              💻 Dev
            </span>
          </div>
        </div>
        <div className=" grid mt-4 grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((article) => (
            <ArticleCard article={article} key={article._id} />
          ))}
        </div>
      </div> */}
    </div>
  );
};

const ArticleCard: FC<{
  article: Article;
}> = ({ article }) => {
  return (
    <div className="rounded-xl h-[150px] gap-4 bg-white pl-4 pr-6 flex py-3">
      <div className="w-[180px] rounded-md overflow-hidden h-full">
        <Image
          height={article.coverImage.metadata.dimensions.height}
          width={article.coverImage.metadata.dimensions.width}
          alt={article.title}
          src={article.coverImage.url}
          className="  object-cover "
        />
      </div>

      <div className="flex-1 w-full">
        <h3 className="font-semibold">How to conduct effect user research</h3>
        <span className="text-sm text-gray-500">3 days ago</span>
        <p className="text-sm line-clamp-2 text-tr mt-2 text-gray-500 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const caseStudies = await client.fetch(groq`
  *[ _type == "post" && category->slug.current == "case-study"  ]{_id , title,slug , description,"category":category->title,"tags":tags[]->title, "coverImage": coverImage.asset->{url,metadata{dimensions}}}`);

  const projects = await client.fetch(groq`
  *[ _type == "project"  ]{_id, slug , title, description,"category":category->title,"tags":tags[]->title, "coverImage": coverImage.asset->{url,metadata{dimensions}}}`);

  const designWorks = await client.fetch(groq`
  *[ _type == "designWork"   ]{_id, slug , title, description, "image": image.asset->{url,metadata{dimensions}}}
  `);

  return {
    props: {
      caseStudies,
      projects,
      designWorks,
    },
    revalidate: 100,
  };
};

export default Home;
