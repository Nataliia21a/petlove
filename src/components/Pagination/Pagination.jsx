import css from "./Pagination.module.css";

export default function Pagination() {
  return (
    <div className={css.containerPagination}>
      <div className={css.circle}>
        <svg className={css.arrovNotActiveDoble} width={20} height={20}>
          <use href="/public/svg/symbol-defs.svg#icon-angle-small-left-grey-mob"></use>
        </svg>
        <svg className={css.arrovNotActiveDoble} width={20} height={20}>
          <use href="/public/svg/symbol-defs.svg#icon-angle-small-left-grey-mob"></use>
        </svg>
      </div>
      <div className={css.circle}>
        <svg className={css.arrovNotActive} width={20} height={20}>
          <use href="/public/svg/symbol-defs.svg#icon-angle-small-left-grey-mob"></use>
        </svg>
      </div>
      <div className={css.circle}>
        <p className={css.pageNumber}>1</p>
      </div>
      <div className={css.circle}>
        <p className={css.pageNumber}>2</p>
      </div>
      <div className={css.circlePoints}>
        <p className={css.points}>...</p>
      </div>
      <div className={css.circleActive}>
        <svg width={20} height={20}>
          <use href="/public/svg/symbol-defs.svg#icon-angle-small-reight-black-mob"></use>
        </svg>
      </div>
      <div className={css.circleActive}>
        <svg className={css.arrovDoble} width={20} height={20}>
          <use href="/public/svg/symbol-defs.svg#icon-angle-small-reight-black-mob"></use>
        </svg>
        <svg className={css.arrovDoble} width={20} height={20}>
          <use href="/public/svg/symbol-defs.svg#icon-angle-small-reight-black-mob"></use>
        </svg>
      </div>
    </div>
  );
}
