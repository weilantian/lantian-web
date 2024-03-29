import { FC, useState } from "react";
import Image from "next/image";
import { useSetAtom } from "jotai";
import { workModalAtom } from "@/states";

import { GetStaticProps } from "next";
import { client } from "@/lib/sanity";
import groq from "groq";
import { DesignWork } from "@/lib/models";
import WorkItem from "@/components/Works/WorkItem";
import Head from "next/head";

const WorkList: FC<{ designWorks: Array<DesignWork> }> = ({ designWorks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const setWorkModalAtom = useSetAtom(workModalAtom);
  return (
    <div className="max-w-[1000px] mx-auto px-4 md:px-6 mt-32">
      <h1 className=" text-3xl font-semibold">Works ({designWorks.length})</h1>
      <h2 className=" text-xl mt-1 text-gray-400">
        A collection of my design and interactive prototypes.
      </h2>

      <Head>
        <title>Works - Eric Wei</title>
        <meta
          name="description"
          content="A collection of my design and interactive prototypes."
        />
      </Head>

      <section className=" grid mt-8 grid-cols-1 md:grid-cols-2 gap-6">
        {designWorks.map((work) => (
          <WorkItem key={work._id} {...work} />
        ))}
      </section>
    </div>
  );
};

export default WorkList;

export const getStaticProps: GetStaticProps = async () => {
  const designWorks = await client.fetch(groq`
  *[ _type == "designWork"   ]{_id, slug , title, description, "image": image.asset->{url,metadata{dimensions}}}
  `);

  return {
    props: {
      designWorks,
    },
    revalidate: 100,
  };
};
