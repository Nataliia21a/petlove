import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import Pagination from "../../components/Pagination/Pagination";
import NoticesFilters from "../../components/NoticesFilters/NoticesFilters";
import NoticesList from "../../components/NoticesList/NoticesList";

export default function NoticesPage() {
  return (
    <div>
      <Header />
      <Title>Find your favorite pet</Title>
      <NoticesFilters />
      <NoticesList />
      <Pagination />
    </div>
  );
}
