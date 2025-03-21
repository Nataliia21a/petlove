import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.containerHomePage}>
      <svg className={css.logo} width="190" height="50">
        <use href="/svg/symbol-defs.svg#icon-logo-mob-white-yellow"></use>
      </svg>
    </div>
  );
}
