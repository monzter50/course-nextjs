import style from "./style.css";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
function Home({ posts }) {
  return (
    <div>
      <header className={style.masthead}>
        <img src="./static/home-bg.jpg" className={style.mastheadImg} />
        <div className={`${style.container} ${style.positionRelative}`}>
          <div className={style.siteHeading}>
            <h1> My first blog with NextJs</h1>
            <span className={style.subheading}>
              A Blog Theme by Start Bootstrap
            </span>
          </div>
        </div>
      </header>
      <main>
        <div className={`${style.container}`}>
          <h1 className={style.sectionHeading}>Welcome to Next.js!!</h1>

          {posts.map(post => (
            <div className={style.postPreview} key={post.id}>
              <h1 className={style.postTitle}>{post.title}</h1>
              <article>
                <p>{post.body}</p>
                <Link href={{ pathname: "/details", query: { id: post.id ,userId:post.userId} }}>
                  <a className={`${style.btn} ${style.btnPrimary}`}>Read</a>
                </Link>
              </article>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
Home.getInitialProps = async ({ req }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await res.json();
  return { posts: json };
};
export default Home;
