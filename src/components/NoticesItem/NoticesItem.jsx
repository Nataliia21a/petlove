import css from "./NoticesItem.module.css";

export default function NoticesItem({ petItem }) {
  return (
    <div className={css.container}>
      <img className={css.img} src={petItem.imgURL} alt={petItem.title} />
      <div className={css.titleContainer}>
        <h2 className={css.title}>{petItem.title}</h2>
        <div className={css.ratingBlock}>
          <svg width="16" height="16">
            <use href="/svg/symbol-defs.svg#icon-star-yellow-mob"></use>
          </svg>
          <p className={css.rating}>{petItem.popularity}</p>
        </div>
      </div>
      <ul className={css.descriptionBlock}>
        <li>
          <p className={css.categories}>Name</p>
          <p>{petItem.name}</p>
        </li>
        <li>
          <p className={css.categories}>Birthday</p> <p>{petItem.birthday}</p>
        </li>
        <li>
          <p className={css.categories}>Sex</p>
          <p>{petItem.sex}</p>
        </li>
        <li>
          <p className={css.categories}>Species</p>
          <p>{petItem.species}</p>
        </li>
        <li>
          <p className={css.categories}>Category</p>
          <p>{petItem.category}</p>
        </li>
      </ul>
      <p className={css.commentText}>{petItem.comment}</p>
      {petItem.price && <p className={css.price}>${petItem.price}</p>}
      <div className={css.btnBlock}>
        <button className={css.btn}>Learn more</button>
        <div className={css.favoriteBlock}>
          <svg width="18" height="18">
            <use href="/svg/symbol-defs.svg#icon-heart-yellow-mob"></use>
          </svg>
        </div>
      </div>
    </div>
  );
}
