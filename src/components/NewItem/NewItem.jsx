import css from "./NewItem.module.css";

export default function NewsItem({ newsItem }) {
  const date = new Date(newsItem.date);
  const dateDay = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const dateMonth =
    date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const dateYear = date.getFullYear();
  const fullDate = `${dateDay}/${dateMonth}/${dateYear}`;

  return (
    <div className={css.containerNewsItem}>
      <img className={css.img} src={newsItem.imgUrl} alt={newsItem.title} />
      <h2>{newsItem.title}</h2>
      <p>{newsItem.text}</p>
      <p>{fullDate}</p>
      <a href={newsItem.url}>Read more</a>
    </div>
  );
}
