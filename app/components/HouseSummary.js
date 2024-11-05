export default function ({ house }) {
  if (!house) return null;
  return (
    <div>
      <div>{house.name}</div>
      <div>{house.address_name}</div>
      <div>{house.average_rating}</div>
    </div>
  )
}
