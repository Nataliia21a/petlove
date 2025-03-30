import { Link } from "react-router-dom";
import css from "../Header/Header.module.css";
// import clsx from "clsx";

export default function Header({ isActive }) {
  // const clsxName = clsx(isActive ? css.headerBlack : css.header);
  return isActive ? (
    <header className={css.header}>
      <Link to="/home">
        <svg className={css.logo} width="76" height="20">
          <use href="/svg/symbol-defs.svg#icon-logo-desktop-tablet"></use>
        </svg>
      </Link>
    </header>
  ) : (
    <header className={css.header}>
      <Link to="/home">
        <svg className={css.logo} width="76" height="20">
          <use href="/svg/symbol-defs.svg#icon-logo-white-mob-main-page"></use>
        </svg>
      </Link>
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
