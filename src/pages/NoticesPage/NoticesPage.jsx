import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import Pagination from "../../components/Pagination/Pagination";
import NoticesFilters from "../../components/NoticesFilters/NoticesFilters";
import NoticesList from "../../components/NoticesList/NoticesList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNotices } from "../../redux/notices/operations";
import css from "./NoticesPage.module.css";

export default function NoticesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotices());
  }, []);

  return (
    <div className={css.noticesPageContainer}>
      <Header />
      <Title>Find your favorite pet</Title>
      <NoticesFilters />
      <NoticesList />
      <Pagination />
    </div>
  );
}
