import css from "../Logo/Logo.module.css";

export default function Logo() {
  return (
    <svg className={css.logo} width="190" height="50">
      <use href="/svg/symbol-defs.svg#icon-logo-mob-white-yellow"></use>
    </svg>
  );
}
