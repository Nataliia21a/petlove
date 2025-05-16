import clsx from "clsx";
import css from "./Pagination.module.css";

export default function Pagination({
  activePage,
  totalPages,
  handleSetFirstPage,
  handlePreviousPage,
  handleSelectionPage,
  handleSetNextPage,
  handleSetLastPage,
}) {
  const pageToShow = [];
  for (let i = activePage; i <= totalPages && i <= activePage + 1; i++) {
    pageToShow.push(i);
  }

  const backArrovDoble = clsx(
    activePage > 1 ? css.arrovDoble : css.arrovNotActiveDoble
  );

  const backArrovOnce = clsx(activePage <= 1 && css.arrovNotActive);

  const arrovToEndDoble = clsx(
    activePage === totalPages ? css.arrovNotActiveDoble : css.arrovDoble
  );

  const arrovToNext = clsx(activePage === totalPages && css.arrovNotActive);

  const activeCircleBack = clsx(
    activePage > 1 ? css.circleActive : css.circleArrov
  );

  const activeCircleToEnd = clsx(
    activePage === totalPages ? css.circleArrov : css.circleActive
  );

  return (
    <div className={css.containerPagination}>
      <button
        type="button"
        className={activeCircleBack}
        onClick={handleSetFirstPage}
      >
        <svg className={backArrovDoble} width={20} height={20}>
          <use href="/svg/symbol-defs.svg#icon-angle-small-left-grey-mob"></use>
        </svg>
        <svg className={backArrovDoble} width={20} height={20}>
          <use href="/svg/symbol-defs.svg#icon-angle-small-left-grey-mob"></use>
        </svg>
      </button>
      <button
        type="button"
        className={activeCircleBack}
        onClick={handlePreviousPage}
      >
        <svg className={backArrovOnce} width={20} height={20}>
          <use href="/svg/symbol-defs.svg#icon-angle-small-left-grey-mob"></use>
        </svg>
      </button>
      <ul className={css.pageButtons}>
        {pageToShow.map((page) => {
          return (
            <li key={page}>
              <button
                onClick={() => handleSelectionPage(page)}
                type="button"
                className={page === activePage ? css.activePage : css.circle}
              >
                {page}
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
        className={activeCircleToEnd}
        onClick={handleSetNextPage}
      >
        <svg className={arrovToNext} width={20} height={20}>
          <use href="/svg/symbol-defs.svg#icon-angle-small-reight-black-mob"></use>
        </svg>
      </button>
      <button
        type="button"
        className={activeCircleToEnd}
        onClick={handleSetLastPage}
      >
        <svg className={arrovToEndDoble} width={20} height={20}>
          <use href="/svg/symbol-defs.svg#icon-angle-small-reight-black-mob"></use>
        </svg>
        <svg className={arrovToEndDoble} width={20} height={20}>
          <use href="/svg/symbol-defs.svg#icon-angle-small-reight-black-mob"></use>
        </svg>
      </button>
    </div>
  );
}
