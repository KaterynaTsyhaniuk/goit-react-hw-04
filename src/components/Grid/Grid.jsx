import css from "./Grid.module.css";

function Grid({ children }) {
  return <ul className={css.list}>{children}</ul>;
}

export default Grid;
