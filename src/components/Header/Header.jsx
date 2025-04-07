import { Link } from "react-router-dom";
import css from "../Header/Header.module.css";
import clsx from "clsx";

export default function Header({ isActive }) {
  const clsxlogo = clsx(isActive ? css.logoWhite : css.logoBlack);
  const clsxBurgerMenu = clsx(!isActive && css.mobMenuBlack);
  return (
    <header className={css.header}>
      <Link to="/home">
        <svg className={clsxlogo} width="76" height="20">
          <use href="/svg/symbol-defs.svg#icon-logo-mob-white-yellow"></use>
        </svg>
      </Link>
      <div className={css.userMenu}>
        {isActive && (
          <div className={css.containerSvgWhite}>
            <svg className={css.userSvg} width="20" height="20">
              <use href="/svg/symbol-defs.svg#icon-user-yellow-mob"></use>
            </svg>
          </div>
        )}
        <svg className={clsxBurgerMenu} width="32" height="32">
          <use href="/svg/symbol-defs.svg#icon-burger-menu-white-mob"></use>
        </svg>
      </div>
    </header>
  );

  // isActive ? (
  //   <header className={css.header}>
  //     <Link to="/home">
  //       <svg className={css.logoWhite} width="76" height="20">
  //         <use href="/svg/symbol-defs.svg#icon-logo-mob-white-yellow"></use>
  //       </svg>
  //     </Link>
  //     <div className={css.userMenu}>
  //       <div className={css.containerSvg}>
  //         <svg className={css.userSvgWhite} width="20" height="20">
  //           <use href="/svg/symbol-defs.svg#icon-user-yellow-mob"></use>
  //         </svg>
  //       </div>
  //       <svg className={css.mobMenuWhite} width="40" height="40">
  //         <use href="/svg/symbol-defs.svg#icon-burger-menu-white-mob"></use>
  //       </svg>
  //     </div>
  //   </header>
  // ) : (
  //   <header className={css.header}>
  //     <Link to="/home">
  //       <svg className={css.logo} width="76" height="20">
  //         <use href="/svg/symbol-defs.svg#icon-logo-1"></use>
  //       </svg>
  //     </Link>
  //     <svg className={css.mobMenu} width="40" height="40">
  //       <use href="/svg/symbol-defs.svg#icon-burger-menu-white-mob"></use>
  //     </svg>
  //   </header>
  // );
}
