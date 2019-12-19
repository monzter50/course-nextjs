import Layout from "../components/Layout";
import Post from "../components/Post";
function Details({ post, user }) {
  return (
    <div>
      <Layout title={user.name}>
        <Post post={post} user={user} />
      </Layout>
    </div>
  );
}
Details.getInitialProps = async ({ query }) => {
  let idPost = query.id;
  let idUser = query.userId;
  const resPost = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${idPost}`
  );
  const jsonPost = await resPost.json();
  const resUser = await fetch(
    `https://jsonplaceholder.typicode.com/users/${idUser}`
  );
  const jsonUser = await resUser.json();
  console.log(jsonUser);
  return { post: jsonPost, user: jsonUser };
};
export default Details;
