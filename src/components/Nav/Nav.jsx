import { NavLink } from "react-router-dom";
import css from "./Nav.module.css";
import { useEffect } from "react";

export default function Nav({ closeMenu }) {
  // const backdropClose = (evt) => {
  //   if (evt.target === evt.currentTarget) {
  //     closeMenu();
  //   }
  // };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        closeMenu();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu]);

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <svg onClick={closeMenu} className={css.svgX} width="32" height="32">
          <use href="/svg/symbol-defs.svg#icon-x-black-mob"></use>
        </svg>
        <nav className={css.navContainer}>
          <NavLink className={css.navItem} to="/news">
            News
          </NavLink>
          <NavLink className={css.navItem} to="/notices">
            Find pet
          </NavLink>
          <NavLink className={css.navItem} to="/friends">
            Our friends
          </NavLink>
        </nav>
        <button className={css.logInBtn}>LOG IN</button>
        <button className={css.registrationBtn}>REGISTRATION</button>
      </div>
    </div>
  );
}
