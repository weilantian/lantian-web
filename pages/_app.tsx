import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { use, useEffect, useLayoutEffect, useRef } from "react";

const output = async () => {
  console.log(`
   __     _                   _    __       _ 
  /__\ __(_) _____      _____(_)  / _|_   _(_)
 /_\| '__| |/ __\ \ /\ / / _ \ | | |_| | | | |
//__| |  | | (__ \ V  V /  __/ |_|  _| |_| | |
\__/|_|  |_|\___| \_/\_/ \___|_(_)_|  \__, |_|
                                      |___/   
  `);
};

export default function App({ Component, pageProps }: AppProps) {
  const isMounted = useRef(false);
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      output();
    }
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
