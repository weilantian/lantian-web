import { NextPage } from "next";
import { useEffect } from "react";

const LinkedinPage: NextPage = () => {
  useEffect(() => {
    window.location.href = "https://www.linkedin.com/in/eric-wei-92a0b2171/";
  }, []);
  return <></>;
};

export default LinkedinPage;
