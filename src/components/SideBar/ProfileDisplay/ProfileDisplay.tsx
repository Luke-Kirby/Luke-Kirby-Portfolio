import ProfilePicture from "./ProfilePicture";
import ProfileName from "./ProfileName";

type Props = { sizePx: number };

function ProfileDisplay({ sizePx }: Props) {
  return (
    <div
      style={{
        // backgroundColor: "#16355d",
        width: sizePx,
        height: 1.5 * sizePx,
        margin: "auto",
        marginTop: "50px",
      }}
    >
      <ProfilePicture />
      <ProfileName fontSizePx={sizePx / 5} />
    </div>
  );
}

export default ProfileDisplay;
