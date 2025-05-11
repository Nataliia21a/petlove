import { useEffect, useState } from "react";
import clsx from "clsx";
import css from "./SearchField.module.css";
import { useDispatch } from "react-redux";
import { fetchNews } from "../../redux/news/operations";

export default function SearchField({ isNewsPageActive }) {
  const dispatch = useDispatch();
  const page = 1;
  const limit = 2;
  const inputSearch = clsx(
    isNewsPageActive ? css.inputSearchNews : css.searchInput
  );
  const [inputValue, setInputValue] = useState("");
  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const handleSearch = () => {
    console.log("inputValue", inputValue);

    dispatch(fetchNews({ keyWord: inputValue, page, limit }));
  };

  useEffect(() => {
    dispatch(fetchNews({ page, limit }));
  }, [dispatch]);

  const handleClick = () => {
    setInputValue("");
  };

  return (
    <div className={inputSearch}>
      <button className={css.btnSearch} onClick={handleSearch}>
        <svg className={css.iconSearch} width="18" height="18">
          <use href="/svg/symbol-defs.svg#icon-search"></use>
        </svg>
      </button>
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
