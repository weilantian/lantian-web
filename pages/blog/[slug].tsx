import { NextPage } from "next";
import groq from "groq";

const BlogPage: NextPage = () => {
  return (
    <div>
      <article className="prose lg:prose-xl"></article>
    </div>
  );
};

export default BlogPage;

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  body
}]`;
