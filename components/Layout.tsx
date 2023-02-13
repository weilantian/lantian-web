import { FC, PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
