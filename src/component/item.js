export default function Item({ item, handleDeleteItem, onToggleItem }) {
  return (
    <div>
      <li>
        <button onClick={() => handleDeleteItem(item.id)}>❌</button>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
      </li>
    </div>
  );
}