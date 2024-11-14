import { useState } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) {
      return toast.error("Please fill in the field");
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <div className={css.boxForm}>
      <header>
        <form onSubmit={handleSubmit} className={css.searchForm}>
          <input
            name="search"
            value={query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
            className={css.inputForm}
          />
          <button type="submit" className={css.formBtn}>
            Search
          </button>
        </form>
      </header>
    </div>
  );
}

export default SearchBar;
