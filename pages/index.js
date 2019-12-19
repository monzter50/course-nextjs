import style from "../static/css/style.css";
import fetch from "isomorphic-unfetch";
import Card from '../components/Card';
import Layout from '../components/Layout';
function Home({ posts }) {
  return (
    <div>
    <Layout title={"My first Blog Next"} subtitle="A Blog Theme by Start Bootstrap">
          {posts.map(post => (
            <Card post={post} />
          ))}
        </Layout>
    </div>
  );
}
Home.getInitialProps = async ({ req }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await res.json();
  return { posts: json };
};
export default Home;
