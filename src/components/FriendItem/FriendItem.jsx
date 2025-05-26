import css from "./FriendItem.module.css";

export default function FriendItem({ friend }) {
  const workdays = friend.workDays;

  const firstWorksDay = workdays && workdays.find((day) => day.isOpen === true);

  return (
    <div className={css.containerFriends}>
      <div className={css.workTime}>
        {firstWorksDay ? (
          <p>
            {firstWorksDay.from} - {firstWorksDay.to}
          </p>
        ) : (
          <p>Day and night</p>
        )}
      </div>
      <div className={css.friendDescription}>
        <img className={css.img} src={friend.imageUrl} alt={friend.title} />
        <div>
          <h2 className={css.title}>{friend.title}</h2>
          <div className={css.contacts}>
            <p>
              Email: <span>{friend.email}</span>
            </p>

            {friend.address ? (
              <p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    friend.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Address: <span>{friend.address}</span>
                </a>
              </p>
            ) : (
              <p>
                Address : <span>website only</span>
              </p>
            )}
            {friend.phone ? (
              <p>
                Phone: <span>{friend.phone}</span>
              </p>
            ) : (
              <p>
                Phone: <span>email only</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
