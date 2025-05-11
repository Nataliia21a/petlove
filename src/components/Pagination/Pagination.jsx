import { useSelector } from "react-redux";
import css from "./Pagination.module.css";

export default function Pagination() {
  const page = useSelector((state) => state.news.page);
  const perPage = useSelector((state) => state.news.perPage);
  const totalPages = useSelector((state) => state.news.totalPages);
  console.log("page, perPage, totalPages", page, perPage, totalPages);

  const pagesArray = Array.from({ length: totalPages }, (_, i) => {
    return i + 1;
  });
  console.log(pagesArray);

  return (
    <div className={css.containerPagination}>
      <div className={css.circle}>
        <svg className={css.arrovNotActiveDoble} width={20} height={20}>
          <use href="/svg/symbol-defs.svg#icon-angle-small-left-grey-mob"></use>
        </svg>
        <svg className={css.arrovNotActiveDoble} width={20} height={20}>
          <use href="/svg/symbol-defs.svg#icon-angle-small-left-grey-mob"></use>
        </svg>
      </div>
      <div className={css.circle}>
        <svg className={css.arrovNotActive} width={20} height={20}>
          <use href="/svg/symbol-defs.svg#icon-angle-small-left-grey-mob"></use>
        </svg>
      </div>
      <ul>
        {pagesArray.map((page) => {
          return (
            <li key={page}>
              <p>{page}</p>
            </li>
          );
        })}
      </ul>
      <div className={css.circle}>
        <p className={css.pageNumber}>{page}</p>
      </div>
      <div className={css.circle}>
        <p className={css.pageNumber}>2</p>
      </div>
      <div className={css.circlePoints}>
        <p className={css.points}>...</p>
      </div>
      <div className={css.circleActive}>
        <svg width={20} height={20}>
          <use href="/svg/symbol-defs.svg#icon-angle-small-reight-black-mob"></use>
        </svg>
      </div>
      <div className={css.circleActive}>
        <svg className={css.arrovDoble} width={20} height={20}>
          <use href="/svg/symbol-defs.svg#icon-angle-small-reight-black-mob"></use>
        </svg>
        <svg className={css.arrovDoble} width={20} height={20}>
          <use href="/svg/symbol-defs.svg#icon-angle-small-reight-black-mob"></use>
        </svg>
      </div>
    </div>
  );
}
