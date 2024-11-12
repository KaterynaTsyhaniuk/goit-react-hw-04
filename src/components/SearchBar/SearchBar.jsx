import { useState } from "react";
import toast from "react-hot-toast";

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
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default SearchBar;
