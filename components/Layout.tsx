import Head from "next/head";
import { FC, PropsWithChildren, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="font-sans">
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
