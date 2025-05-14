import { useSelector } from "react-redux";
import NewsItem from "../NewItem/NewItem";

import css from "./NewsList.module.css";

export default function NewsList() {
  const newsList = useSelector((state) => state.news.items.results) || [];

  return (
    <ul className={css.newsList}>
      {newsList.map((news) => {
        return (
          <li key={news._id}>
            <NewsItem newsItem={news} />
          </li>
        );
      })}
    </ul>
  );
}
