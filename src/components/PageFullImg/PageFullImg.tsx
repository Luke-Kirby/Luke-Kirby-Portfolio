import "./PageFullImg.scss";
import classnames from "classnames";

interface Props {
  backgroundPath: string;
  title: string;
  subTitle: string;
}

function PageContainer(props: Props) {
  const imgStyle = {
    backgroundImage: `url(${props.backgroundPath})`,
  };
  return (
    <div className="page-container" style={imgStyle}>
      <div className="element-container">
        <h1 className={classnames("title", "title-h1")}>{props.title}</h1>
        <h2 className={classnames("title","title-h2")}>
          <em>{props.subTitle}</em>
        </h2>
      </div>
    </div>
  );
}

export default PageContainer;
