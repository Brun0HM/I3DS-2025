import style from "./profile.module.css";

const Profile = ({children,fotoPerfil}) => {
  return (
    <div id={style.profile}>
      <img src={fotoPerfil}  alt="" />
      <p>{children}</p>
    </div>
  );
};

export default Profile;
