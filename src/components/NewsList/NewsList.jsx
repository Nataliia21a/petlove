import { useDispatch, useSelector } from "react-redux";
import NewsItem from "../NewItem/NewItem";
import { useEffect } from "react";
import { fetchNews } from "../../redux/news/operations";
import css from "./NewsList.module.css";

export default function NewsList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
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
