export default function Stats({ items }) {
  if (!items.length)
    return <p className="stats">Start adding items to buy   </p>;
  const numItems = items.length;
  const checkedCount = items.filter((item) => item.packed).length;
  const percentage =
    items.length !== 0 ? Math.round((checkedCount / items.length) * 100) : 0;
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have bought all the items you need"
          : ` You have (${numItems}) items to buy، and you bought  (${checkedCount}) (%${percentage})`}
      </em>
    </footer>
  );
}
