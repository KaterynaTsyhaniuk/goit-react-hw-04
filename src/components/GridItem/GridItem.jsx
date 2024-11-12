import css from "./GridItem.module.css";

function GridItem({ children }) {
  return <li className={css.item}>{children}</li>;
}

export default GridItem;
