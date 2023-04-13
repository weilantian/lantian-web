import Head from "next/head";
import Link from "next/link";

const FourOFourPage = () => {
  return (
    <div className="max-w-[1000px] px-4 md:px-6    mx-auto gap-5 mt-32">
      <Head>
        <title>Page not found - Eric Wei</title>
      </Head>
      <div className=" bg-white px-8 pb-12 pt-8 rounded-lg  ">
        <h1 className="text-2xl font-bold">⚠️ This page can not be found...</h1>
        <Link className="mt-6 font-medium text-blue-500 block" href="/">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default FourOFourPage;
