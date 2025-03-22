import css from "../Header/Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <svg className={css.logo} width="76" height="20">
        <use href="/svg/symbol-defs.svg#icon-logo-white-mob-main-page"></use>
      </svg>
      <div className={css.userMenu}>
        <div className={css.containerSvg}>
          <svg className={css.userSvg} width="20" height="20">
            <use href="/svg/symbol-defs.svg#icon-user-02-yellow"></use>
          </svg>
        </div>
        <svg className={css.mobMenu} width="40" height="40">
          <use href="/svg/symbol-defs.svg#icon-mob-menu-white"></use>
        </svg>
      </div>
    </header>
  );
}
