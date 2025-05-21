export default function FriendItem({ friend }) {
  return (
    <div>
      <img src={friend.imageUrl} alt={friend.title} />
      <ul>
        <li>
          <h2>{friend.title}</h2>
        </li>
        <li>
          <p>Email: {friend.email}</p>
        </li>
        <li>
          {friend.address ? (
            <p>Address: {friend.address}</p>
          ) : (
            <p>Address : website only</p>
          )}
        </li>
        <li>
          {friend.phone ? (
            <p>Phone: {friend.phone}</p>
          ) : (
            <p>Phone: email only</p>
          )}
        </li>
      </ul>
    </div>
  );
}
