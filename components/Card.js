import style from "../static/css/style.css";
import Link from "next/link";
export default class Card extends React.Component {
  render() {
    const { post } = this.props;
    return (
      <div className={`${style.container}`}>
        <div className={style.postPreview} key={post.id}>
          <h1 className={style.postTitle}>{post.title}</h1>
          <article>
            <p>{post.body}</p>
            <Link
              href={{
                pathname: "/details",
                query: { id: post.id, userId: post.userId }
              }}
            >
              <a className={`${style.btn} ${style.btnPrimary}`}>Read</a>
            </Link>
          </article>
        </div>
      </div>
    );
  }
}
