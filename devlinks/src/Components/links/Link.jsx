import style from "./Link.module.css";

function Link({children, link}) {
  return (
    <li>
      <a href={link}>{children}</a>
    </li>
  );
}

export default Link;
