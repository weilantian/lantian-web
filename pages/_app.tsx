import Layout from "@/components/Layout";
import WorkModal from "@/components/Works/WorkModal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} /> <WorkModal />
    </Layout>
  );
}
