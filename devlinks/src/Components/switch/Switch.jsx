import style from "./Switch.module.css";

const Switch = ({ troca, islight }) => {
  return (
    <div onClick={troca} className={islight && style.light}>
      <div id={style.switch}>
        <button></button>
        <span></span>
      </div>
    </div>
  );
};

export default Switch;
