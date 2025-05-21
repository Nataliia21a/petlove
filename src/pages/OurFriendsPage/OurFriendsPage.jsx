import { useDispatch } from "react-redux";
import { getFriends } from "../../redux/friends/operations";
import FriendList from "../../components/FriendList/FriendList";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import { useEffect } from "react";

export default function OurFriendsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFriends());
  }, []);
  return (
    <div>
      <Header />
      <Title>Our friends</Title>
      <FriendList />
    </div>
  );
}
