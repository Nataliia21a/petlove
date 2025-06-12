import { useDispatch } from "react-redux";
import { getFriends } from "../../redux/friends/operations";
import FriendList from "../../components/FriendList/FriendList";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import { useEffect } from "react";

import css from "./OurFriendsPage.module.css";

export default function OurFriendsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFriends());
  }, []);
  return (
    <div className={css.containerOurFriends}>
      <Header />
      <Title>Our friends</Title>
      <FriendList />
    </div>
  );
}
