import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchNews } from "../../redux/news/operations";

import Header from "../../components/Header/Header";
import SearchField from "../../components/SearchField/SearchField";
import NewsList from "../../components/NewsList/NewsList";
import Title from "../../components/Title/Title";
import css from "./NewsPage.module.css";
import Pagination from "../../components/Pagination/Pagination";
import { setActivePage, setSearchQuery } from "../../redux/news/slice";

export default function NewsPage() {
  const isActive = true;
  const page = 1;
  const limit = 2;

  const searchQuery = useSelector((state) => state.news.searchQuery);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews({ keyWord: searchQuery, page, limit }));
  }, [dispatch, searchQuery, page, limit]);

  const handleSearch = () => {
    dispatch(fetchNews({ keyWord: searchQuery, page, limit }));
  };

  const handleChange = (value) => {
    dispatch(setSearchQuery(value));
    dispatch(setActivePage(1));
  };

  const handleClear = () => {
    dispatch(setSearchQuery(""));
  };

  return (
    <div className={css.container}>
      <Header />
      <Title>News</Title>
      <SearchField
        isNewsPageActive={isActive}
        onChange={handleChange}
        onSearch={handleSearch}
        handleClick={handleClear}
        value={searchQuery}
      />
      <NewsList />
      <Pagination />
    </div>
  );
}
