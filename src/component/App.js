import { useState } from "react";

import Logo from "./logo";
import Form from "./form";
import PackingList from "./packingList";
import Stats from "./stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(itemId) {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all item?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClear={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
