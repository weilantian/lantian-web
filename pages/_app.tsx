import Layout from "@/components/Layout";
import WorkModal from "@/components/Works/WorkModal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} /> <WorkModal />
      </QueryClientProvider>
    </Layout>
  );
}
