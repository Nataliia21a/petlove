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
  const dispatch = useDispatch();

  const isActive = true;

  const { searchQuery, activePage, totalPages, perPage } = useSelector(
    (state) => state.news
  );

  useEffect(() => {
    dispatch(
      fetchNews({ keyWord: searchQuery, page: activePage, limit: perPage })
    );
  }, [dispatch, searchQuery, activePage, perPage]);

  const handleSearch = () => {
    dispatch(
      fetchNews({ keyWord: searchQuery, page: activePage, limit: perPage })
    );
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
        handleClear={handleClear}
        value={searchQuery}
      />
      <NewsList />
      {totalPages > 1 && (
        <Pagination totalPages={totalPages} activePage={activePage} />
      )}
    </div>
  );
}
