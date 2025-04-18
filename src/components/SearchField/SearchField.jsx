import { useState } from "react";
import clsx from "clsx";
import css from "./SearchField.module.css";

export default function SearchField({ isNewsPageActive }) {
  const inputNewsPage = clsx(
    isNewsPageActive ? css.inputSearchNews : css.searchInput
  );
  const [inputValue, setInputValue] = useState("");
  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };
  const handleClick = () => {
    setInputValue("");
  };

  return (
    <div className={inputNewsPage}>
      <svg className={css.iconSearch} width="18" height="18">
        <use href="/svg/symbol-defs.svg#icon-search"></use>
      </svg>
      <input
        className={css.input}
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search"
      />
      {inputValue && (
        <button className={css.buttonX} onClick={handleClick}>
          <svg className={css.iconX} width="18" height="18">
            <use href="/svg/symbol-defs.svg#icon-x-black-mob"></use>
          </svg>
        </button>
      )}
    </div>
  );
}
