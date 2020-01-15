import Link from "next/link";
import style from "./style.css";
function Details({post,user}) {

  return (
    <div>
      <header className={style.masthead}>
        <img src="./static/home-bg.jpg" className={style.mastheadImg} />
        <div className={`${style.container} ${style.positionRelative}`}>
          <div className={style.siteHeading}>
            <h1> {user.name}</h1>
            <span className={style.subheading}>
              <Link href="/">
                <a className={style.textWhite}>Back</a>
              </Link>
            </span>
          </div>
        </div>
      </header>
      <main>
        <div className={`${style.container}`}>
        <div style={{marginTop:40}} key={post.id}>
              <h1 className={style.postTitle}>{post.title}</h1>
              <article>
                <p>{post.body}</p>
  <p className={style.postMeta}><a href={`http://${user.website}`} target="_blank">@{user.username}</a></p>
              </article>
            </div>
        </div>
      </main>
    </div>
  );
}
Details.getInitialProps = async ({ query }) => {
  let idPost = query.id
  let idUser = query.userId
  let [reqPost,reqUser] =  await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`),
    fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`)
  ]);
  const jsonPost = await reqPost.json();
  const jsonUser = await reqUser.json();
  console.log(jsonUser)
  return { post: jsonPost,user:jsonUser };
};
export default Details;
