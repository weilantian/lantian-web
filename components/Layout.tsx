import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Script from "next/script";

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="font-sans">
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <Navbar />
      {children}
      <Footer />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-E429VC1L6G"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-E429VC1L6G');
       `}
      </Script>
    </div>
  );
};

export default Layout;
