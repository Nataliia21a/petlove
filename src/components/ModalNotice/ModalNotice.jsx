import css from "./ModalNotice.module.css";

export default function ModalNotice() {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <p>Hello</p>
      </div>
    </div>
  );
}
