import React, { useState } from "react";
import Item from "./Item";

function ParkingList({ items, onDeleteItem, onToggle, onClearItems }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  switch (sortBy) {
    case "description":
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
      break;
    case "packed":
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
      break;
    default:
      sortedItems = items;
      break;
  }
  if (!sortedItems?.length)
    return <p className="list">No items yet. Add some with the form above.</p>;
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggle={onToggle}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear list</button>
      </div>
    </div>
  );
}

export default ParkingList;
