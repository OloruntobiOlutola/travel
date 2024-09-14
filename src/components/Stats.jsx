import React from "react";

function Stats({ items }) {
  const numOfItems = items?.length;
  const numOfPackedItems = items.filter((item) => item.packed)?.length;
  let percentageOfPackedItems = 0;
  if (numOfItems) {
    percentageOfPackedItems = Math.round((numOfPackedItems / numOfItems) * 100);
  }
  return (
    <footer className="stats">
      {numOfItems === 0 ? (
        <em>You don't have any item on the list yet</em>
      ) : numOfPackedItems === numOfItems ? (
        <em>You have already packed everything</em>
      ) : (
        <em>
          💼 You have {numOfItems} items on your list, and you already packed{" "}
          {numOfPackedItems} ({percentageOfPackedItems}%){" "}
        </em>
      )}
    </footer>
  );
}

export default Stats;
