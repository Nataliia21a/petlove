import { Link } from "react-router-dom";
import css from "../Header/Header.module.css";
import clsx from "clsx";
import { useState } from "react";
import Nav from "../../components/Nav/Nav";

export default function Header({ isActive }) {
  const clsxlogo = clsx(isActive ? css.logoWhite : css.logoBlack);
  const clsxBurgerMenu = clsx(!isActive && css.mobMenuBlack);
  const clsxUserIcon = clsx(
    isActive ? css.containerSvgWhite : css.containerSvg
  );
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  return (
    <header className={css.header}>
      <Link to="/home">
        <svg className={clsxlogo} width="76" height="20">
          <use href="/svg/symbol-defs.svg#icon-logo-mob-white-yellow"></use>
        </svg>
      </Link>
      <div className={css.userMenu} onClick={handleOpenMenu}>
        <div className={clsxUserIcon}>
          <svg className={css.userSvg} width="20" height="20">
            <use href="/svg/symbol-defs.svg#icon-user-yellow-mob"></use>
          </svg>
        </div>
        <svg className={clsxBurgerMenu} width="32" height="32">
          <use href="/svg/symbol-defs.svg#icon-burger-menu-white-mob"></use>
        </svg>
      </div>
      {isOpen && <Nav closeMenu={handleCloseMenu} />}
    </header>
  );
}
