import { useSelector } from "react-redux";
import NoticesItem from "../NoticesItem/NoticesItem";
import css from "./NoticesList.module.css";

export default function NoticesList() {
  const petList = useSelector((state) => state.notices.items) || [];

  console.log("petList", petList);

  return (
    <ul className={css.petListContainer}>
      {petList.map((petItem) => {
        return (
          <li key={petItem._id}>
            <NoticesItem petItem={petItem} />
          </li>
        );
      })}
    </ul>
  );
}
