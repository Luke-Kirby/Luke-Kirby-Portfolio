import ProfilePicture from "./ProfilePicture";
import ProfileName from "./ProfileName";

type Props = {
  sizePx: number;
  profileName: string;
  profilePicturePath: string;
};

function ProfileDisplay({ sizePx, profileName, profilePicturePath }: Props) {
  const style = {
    width: sizePx,
    height: 1.3 * sizePx,
    margin: "auto",
    marginTop: "50px",
    marginBottom: "10px",
  };

  return (
    <div style={style}>
      <ProfilePicture profilePicturePath={profilePicturePath} />
      <ProfileName fontSizePx={sizePx / 5} profileName={profileName} />
    </div>
  );
}

export default ProfileDisplay;
