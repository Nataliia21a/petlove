import { useDispatch, useSelector } from "react-redux";
import NoticesItem from "../NoticesItem/NoticesItem";
import css from "./NoticesList.module.css";
import ModalNotice from "../ModalNotice/ModalNotice";
import { useEffect } from "react";
import { getNoticeById } from "../../redux/notices/operations";
import ModalAttention from "../ModalAttention/ModalAttention";
import { setModalOpen } from "../../redux/notices/slice";

export default function NoticesList() {
  const petList = useSelector((state) => state.notices.items) || [];

  console.log("petList", petList);

  const noticesId = useSelector((state) => state.notices.selectNotice);
  const modalIsOpen = useSelector((state) => state.notices.modalIsOpen);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getNoticeById(noticesId));
  // }, [noticesId]);

  const handleClose = () => {
    dispatch(setModalOpen(false));
  };

  return (
    <div className={css.noticesListContainer}>
      <ul className={css.petListContainer}>
        {petList.map((petItem) => {
          return (
            <li key={petItem._id}>
              <NoticesItem petItem={petItem} />
            </li>
          );
        })}
      </ul>
      {/* <ModalNotice /> */}
      {modalIsOpen && <ModalAttention handleClose={handleClose} />}
    </div>
  );
}
