import Header from "../../components/Header/Header";
import SearchField from "../../components/SearchField/SearchField";
import Title from "../../components/Title/Title";
import css from "./NewsPage.module.css";

export default function NewsPage() {
  const isActive = true;
  return (
    <div>
      <Header />
      <Title>News</Title>
      <SearchField isNewsPageActive={isActive} />
    </div>
  );
}
