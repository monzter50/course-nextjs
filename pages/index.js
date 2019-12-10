import style from "./style.css";
function Home() {
  return (
    <div>
      <header
        className={style.masthead}
        style={{backgroundImage: "url("+'./static/home-bg.jpg'+")"}}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>Clean Blog</h1>
                <span className="subheading">
                  A Blog Theme by Start Bootstrap
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <h1 className={style.header}>Welcome to Next.js!</h1>
    </div>
  );
}

export default Home;
