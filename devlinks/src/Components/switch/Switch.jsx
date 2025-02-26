import style from "./Switch.module.css";

const Switch = ({ troca, islight }) => {
  return (
    <div className={islight && style.light}>
      <div onClick={troca} id={style.switch}>
        <button></button>
        <span></span>
      </div>
    </div>
  );
};

export default Switch;
