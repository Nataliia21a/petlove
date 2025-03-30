import { NavLink } from "react-router-dom";
import css from "./UserNav.modal.css";

export default function UserNav() {
  return (
    <nav>
      <NavLink to="/profile">
        <div className={css.containerSvg}>
          <svg className={css.userSvg} width="20" height="20">
            <use href="/svg/symbol-defs.svg#icon-user-02-yellow"></use>
          </svg>
        </div>
      </NavLink>
      <NavLink to="/login">LOG IN</NavLink>
    </nav>
  );
}
