import { profile } from "console";

type Props = { fontSizePx: number; profileName: string };

function ProfileName({ fontSizePx, profileName }: Props) {
  const style = {
    fontFamily: "revert",
    color: "rgb(255, 255, 255)",
    fontSize: fontSizePx,
    margin: "auto",
    marginTop: "0%",
  };

  return <p style={style}>{profileName}</p>;
}

export default ProfileName;
