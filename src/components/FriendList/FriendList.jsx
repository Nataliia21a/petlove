import { useSelector } from "react-redux";
import FriendItem from "../FriendItem/FriendItem";
import css from "./FriendList.module.css";

export default function FriendList() {
  const friendsList = useSelector((state) => state.friends.items);

  return (
    <ul className={css.container}>
      {friendsList.map((friend) => {
        return (
          <li className={css.friendItemContainer} key={friend._id}>
            <FriendItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
}
