export default function NoticesItem({ petItem }) {
  return (
    <div>
      <img src={petItem.imgURL} alt={petItem.title} />
    </div>
  );
}
