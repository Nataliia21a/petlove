export default function NewsItem({ newsItem }) {
  console.log("newsItem.date", newsItem.date);
  const date = new Date(newsItem.date);
  console.log("date", date);

  return (
    <ul>
      <li>
        <img src={newsItem.imgUrl} />
        <h2>{newsItem.title}</h2>
        <p>{newsItem.date}</p>
        <a href={newsItem.url}>Read more</a>
      </li>
    </ul>
  );
}
