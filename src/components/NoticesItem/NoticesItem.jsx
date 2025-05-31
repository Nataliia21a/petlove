import { useDispatch } from "react-redux";
import css from "./NoticesItem.module.css";
import { setModalOpen, setSelectNotice } from "../../redux/notices/slice";

export default function NoticesItem({ petItem }) {
  const date = new Date(petItem.birthday);
  const dateDay = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const dateMonth =
    date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const dateYear = date.getFullYear();
  const fullDate = `${dateDay}.${dateMonth}.${dateYear}`;

  const dispatch = useDispatch();

  const handleclick = () => {
    dispatch(setSelectNotice(petItem._id));
    dispatch(setModalOpen(true));
  };

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
          <p className={css.categoriesText}>{petItem.name}</p>
        </li>
        <li>
          <p className={css.categories}>Birthday</p>
          <p className={css.categoriesText}>{fullDate}</p>
        </li>
        <li>
          <p className={css.categories}>Sex</p>
          <p className={css.categoriesText}>{petItem.sex}</p>
        </li>
        <li>
          <p className={css.categories}>Species</p>
          <p className={css.categoriesText}>{petItem.species}</p>
        </li>
        <li>
          <p className={css.categories}>Category</p>
          <p className={css.categoriesText}>{petItem.category}</p>
        </li>
      </ul>
      <p className={css.commentText}>{petItem.comment}</p>
      {petItem.price && <p className={css.price}>${petItem.price}</p>}
      <div className={css.btnBlock}>
        <button type="button" onClick={handleclick} className={css.btn}>
          Learn more
        </button>
        <div className={css.favoriteBlock}>
          <svg width="18" height="18">
            <use href="/svg/symbol-defs.svg#icon-heart-yellow-mob"></use>
          </svg>
        </div>
      </div>
    </div>
  );
}
