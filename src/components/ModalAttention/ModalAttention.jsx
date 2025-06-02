import { useEffect } from "react";
import css from "./ModalAttention.module.css";

export default function ModalAttention({ handleClose }) {
  const backdropClose = (evt) => {
    if (evt.target === evt.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);

  return (
    <div className={css.backdrop} onClick={backdropClose}>
      <div className={css.modal}>
        <button type="button" onClick={handleClose}>
          <svg className={css.svg} width="24" height="24">
            <use href="/svg/symbol-defs.svg#icon-x-black-mob"></use>
          </svg>
        </button>
        <div className={css.noPetPhoto}>
          <img
            className={css.img}
            src="/img/dog-attention-mob.png"
            alt="dog attention"
          />
        </div>
        <h1 className={css.title}>Attention</h1>
        <p className={css.description}>
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </p>
        <div className={css.btnBlock}>
          <button className={css.btnLogIn}>Log In</button>
          <button className={css.btnRegister}>Registration</button>
        </div>
      </div>
    </div>
  );
}
