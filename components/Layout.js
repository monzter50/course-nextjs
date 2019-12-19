import style from "../static/css/style.css";
export default class Layout extends React.Component {
  render() {
    const {title,subtitle} = this.props
    return (
      <>
        <header className={style.masthead}>
          <img src="./static/home-bg.jpg" className={style.mastheadImg} />
          <div className={`${style.container} ${style.positionRelative}`}>
            <div className={style.siteHeading}>
              <h1> {title}</h1>
              <span className={style.subheading}>
                {subtitle}
               
              </span>
            </div>
          </div>
        </header>
        <main>
          <div className={style.container}>
            {this.props.children}
          </div>
        </main>
      </>
    );
  }
}
