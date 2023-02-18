import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { navAtom } from "@/states";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const setNav = useSetAtom(navAtom);
  useEffect(() => {
    setNav((prev) => ({ ...prev, showName: true }));
  }, []);
  return (
    <>
      <div className="w-full flex h-screen items-center justify-center">
        <h1 className=" text-2xl  md:text-4xl">🚧 Coming Soon! 🚧</h1>
      </div>
    </>
  );
}
