import css from "./FriendItem.module.css";

export default function FriendItem({ friend }) {
  return (
    <div className={css.containerFriends}>
      <img className={css.img} src={friend.imageUrl} alt={friend.title} />
      <div>
        <h2>{friend.title}</h2>
        <p>
          Email: <span></span>
          {friend.email}
        </p>

        {friend.address ? (
          <p>
            Address: <span></span>
            {friend.address}
          </p>
        ) : (
          <p>Address : website only</p>
        )}

        {friend.phone ? (
          <p>
            Phone: <span>{friend.phone}</span>
            {friend.phone}
          </p>
        ) : (
          <p>
            Phone: <span>email only</span>
          </p>
        )}
      </div>
    </div>
  );
}
