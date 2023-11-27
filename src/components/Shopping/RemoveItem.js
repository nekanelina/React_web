import React, { useState } from 'react';

const RemoveItem
 = ({ item, onDelete }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const handleDelete = () => {
    onDelete(item.id); // Pass the item's ID to the parent component for deletion
  };

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  }

  return (
    <article className="removeItem">
      <div className="item-info">
      <img src={item.image} alt={item.name} className="item-image" />
        <h4>{item.name}</h4>
        <button onClick={toggleDescription}>
          {expanded ? 'Hide Description' : 'Show Description'}
        </button>

        <button onClick={handleDelete} className="delete-button">
          Remove
        </button>

        {/* Dropdown for quantity selection */}
        <select value={quantity} onChange={handleQuantityChange}>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      {expanded && <p className="description">{item.description}</p>}
    </article>
  );
};

export default RemoveItem;