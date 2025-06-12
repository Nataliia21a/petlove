import { NavLink } from "react-router-dom";
import css from "./Nav.module.css";
import { useEffect, useRef } from "react";

export default function Nav({ closeMenu }) {
  const menuRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMenu]);

  return (
    <div className={css.backdrop}>
      <div className={css.modal} ref={menuRef}>
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
