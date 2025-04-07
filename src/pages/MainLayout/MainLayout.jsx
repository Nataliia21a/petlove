import css from "../MainLayout/MainLayout.module.css";
import Header from "../../components/Header/Header";

export default function MainLayout() {
  const isActive = true;
  return (
    <div className={css.mainLayoutContainer}>
      <div className={css.orangeContainer}>
        <Header isActive={isActive} />
        <div className={css.textContainer}>
          <h1 className={css.title}>
            Take good <span className={css.span}>care</span> of your small pets
          </h1>
          <p className={css.description}>
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </p>
        </div>
      </div>
      <div>
        <img
          srcSet="/img/main-image-mob-1x.png 1x, /img/main-image-mob-2x.png 2x"
          src="/img/main-image-mob-1x.png"
          alt="home page petlove"
          width="335"
          height="402"
        />
      </div>
    </div>
  );
}
