import { NavLink } from "react-router-dom";
import css from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <svg className={css.svgX} width="32" height="32">
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
      </div>
    </div>
  );
}
