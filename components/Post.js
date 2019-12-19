import style from "../static/css/style.css";
import Link from "next/link";
export default class Card extends React.Component {
  render() {
    const { post,user } = this.props;
    return (
      <div style={{ marginTop: 40 }} key={post.id}>
      <p className={style.postMeta}>
        <Link href="/">
          <a> Home</a>
        </Link> / <span>Details</span>
      </p>
      <h1 className={style.postTitle}>{post.title}</h1>
      <article>
        <p>{post.body}</p>
        <p className={style.postMeta}>
          <a href={`http://${user.website}`} target="_blank">
            @{user.username}
          </a>{" "}
        </p>
      </article>
    </div>
    );
  }
}
