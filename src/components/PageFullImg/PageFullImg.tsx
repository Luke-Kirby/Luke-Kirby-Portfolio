import "./PageFullImg.scss";
import classnames from "classnames";

interface Props {
  backgroundPath: string;
  title: string;
  subTitle: string;
}

function PageContainer(props: Props) {
  const imgStyle = {
    background: `url(${props.backgroundPath})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover ",
    backgroundAttachment: "fixed",
  };
  return (
    <div style={imgStyle} className="page-container mobile-page-home" >
      <div className="element-container">
        <h1 className={classnames("title", "title-h1")}>{props.title}</h1>
        <h2 className={classnames("title", "title-h2")}>
          <em>{props.subTitle}</em>
        </h2>
      </div>
    </div>
  );
}

export default PageContainer;
