import clsx from "clsx";
import css from "./SearchField.module.css";

export default function SearchField({
  isNewsPageActive,
  isNoticesActive,
  onChange,
  onSearch,
  handleClear,
  value,
}) {
  // const inputSearch = clsx(
  //   isNewsPageActive ? css.inputSearchNews : css.searchInput
  // );

  const inputSearch = clsx(
    isNewsPageActive && css.inputSearchNews,
    isNoticesActive ? css.inputSearchNotices : css.searchInput
  );

  const inputStyle = clsx(isNoticesActive ? css.inputNotices : css.input);

  return (
    <div className={inputSearch}>
      <button className={css.btnSearch} onClick={onSearch}>
        <svg className={css.iconSearch} width="18" height="18">
          <use href="/svg/symbol-defs.svg#icon-search"></use>
        </svg>
      </button>
      <input
        className={inputStyle}
        type="text"
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
        placeholder="Search"
      />
      {value && (
        <button className={css.buttonX} onClick={handleClear}>
          <svg className={css.iconX} width="18" height="18">
            <use href="/svg/symbol-defs.svg#icon-x-black-mob"></use>
          </svg>
        </button>
      )}
    </div>
  );
}
