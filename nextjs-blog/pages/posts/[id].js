import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <div>
      <Layout>{postData.title}</Layout>
    </div>
  );
}
