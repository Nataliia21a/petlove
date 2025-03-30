import Header from "../../components/Header/Header";
import css from "./NewsPage.module.css";

export default function NewsPage() {
  const isActive = true;
  return (
    <div>
      <Header isActive={isActive} />
      <p>NewsPage</p>
    </div>
  );
}
