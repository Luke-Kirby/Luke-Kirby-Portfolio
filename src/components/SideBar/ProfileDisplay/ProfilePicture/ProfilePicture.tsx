import "./ProfilePicture.scss";

type Props = { profilePicturePath: string };

function ProfilePicture({ profilePicturePath }: Props) {
  return (
    <img
      alt="Profile Picture"
      src={profilePicturePath}
      className="profile-picture"
    />
  );
}

export default ProfilePicture;
