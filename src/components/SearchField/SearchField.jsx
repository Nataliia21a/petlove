import { useState } from "react";
import css from "./SearchField.module.css";

export default function SearchField() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  return (
    <div className={css.searchInput}>
      <svg width="18" height="18">
        <use href="/svg/symbol-defs.svg#icon-search"></use>
      </svg>
      <input
        className={css.input}
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search"
      />
    </div>
  );
}
