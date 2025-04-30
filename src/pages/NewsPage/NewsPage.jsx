import Header from "../../components/Header/Header";
import SearchField from "../../components/SearchField/SearchField";
import NewsList from "../../components/NewsList/NewsList";
import Title from "../../components/Title/Title";
import css from "./NewsPage.module.css";
import Pagination from "../../components/Pagination/Pagination";

export default function NewsPage() {
  const isActive = true;
  return (
    <div className={css.container}>
      <Header />
      <Title>News</Title>
      <SearchField isNewsPageActive={isActive} />
      <NewsList />
      <Pagination />
    </div>
  );
}
