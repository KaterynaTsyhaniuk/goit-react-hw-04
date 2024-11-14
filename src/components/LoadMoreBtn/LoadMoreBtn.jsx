import css from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ children, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled} className={css.loadMoreBtn}>
      {children}
    </button>
  );
}

export default LoadMoreBtn;
