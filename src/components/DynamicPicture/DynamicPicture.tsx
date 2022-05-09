import "./DynamicPicture.scss";

interface PictureItem {
    label: string;
    imgPath: string;
  }
  
  interface Props {
    items: PictureItem[];
  }

function DynamicPicture(props: Props) {
    return <div></div>
}

export default DynamicPicture;