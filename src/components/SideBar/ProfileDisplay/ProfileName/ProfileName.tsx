type Props = { fontSizePx: number };

function ProfileName({ fontSizePx }: Props) {
  return (
    <p
      style={{
        fontFamily: "revert",
        color: "rgb(255, 255, 255)",
        fontSize: fontSizePx,
        margin: "auto",
        marginTop: "10%",
      }}
    >
      Luke Kirby
    </p>
  );
}

export default ProfileName;
