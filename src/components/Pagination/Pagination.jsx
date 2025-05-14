import { useDispatch } from "react-redux";
import css from "./Pagination.module.css";
import { setActivePage } from "../../redux/news/slice";

export default function Pagination({ activePage, totalPages }) {
  const dispatch = useDispatch();

  const pageToShow = [];
  for (let i = activePage; i <= totalPages && i <= activePage + 1; i++) {
    pageToShow.push(i);
  }
  return (
    <div className={css.containerPagination}>
      <button
        type="button"
        className={css.circle}
        onClick={() => {
          dispatch(setActivePage(1));
        }}
      >
        <svg className={css.arrovNotActiveDoble} width={20} height={20}>
          <use href="/svg/symbol-defs.svg#icon-angle-small-left-grey-mob"></use>
        </svg>
        <svg className={css.arrovNotActiveDoble} width={20} height={20}>
          <use href="/svg/symbol-defs.svg#icon-angle-small-left-grey-mob"></use>
        </svg>
      </button>
      <button
        type="button"
        className={css.circle}
        onClick={() => {
          if (activePage > 1) {
            dispatch(setActivePage(activePage - 1));
          }
        }}
      >
        <svg className={css.arrovNotActive} width={20} height={20}>
          <use href="/svg/symbol-defs.svg#icon-angle-small-left-grey-mob"></use>
        </svg>
      </button>
      <ul>
        {pageToShow.map((page) => {
          return (
            <li key={page}>
              <button
                onClick={() => {
                  dispatch(setActivePage(page));
                }}
                type="button"
                className={css.circle}
              >
                <p className={css.pageNumber}>{page}</p>
              </button>
            </li>
          );
        })}
      </ul>
      {activePage < totalPages && (
        <button type="button" className={css.circlePoints}>
          <p className={css.points}>...</p>
        </button>
      )}
      <button
        type="button"
        className={css.circleActive}
        onClick={() => {
          dispatch(setActivePage(activePage + 1));
        }}
      >
        <svg width={20} height={20}>
          <use href="/svg/symbol-defs.svg#icon-angle-small-reight-black-mob"></use>
        </svg>
      </button>
      <button
        type="button"
        className={css.circleActive}
        onClick={() => {
          dispatch(setActivePage(totalPages));
        }}
      >
        <svg className={css.arrovDoble} width={20} height={20}>
          <use href="/svg/symbol-defs.svg#icon-angle-small-reight-black-mob"></use>
        </svg>
        <svg className={css.arrovDoble} width={20} height={20}>
          <use href="/svg/symbol-defs.svg#icon-angle-small-reight-black-mob"></use>
        </svg>
      </button>
    </div>
  );
}
