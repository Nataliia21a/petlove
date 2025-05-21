import { useSelector } from "react-redux";
import FriendItem from "../FriendItem/FriendItem";

export default function FriendList() {
  const friendsList = useSelector((state) => state.friends.items);

  return (
    <ul>
      {friendsList.map((friend) => {
        return (
          <li key={friend._id}>
            <FriendItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
}
