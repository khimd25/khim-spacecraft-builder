import React from 'react';
import ItemCard from './ItemCard';
import ItemAction from './ItemAction';
import styles from './InventoryDisplay.module.css'; 
const InventoryDisplay = ({ items, onDeleteItem }) => {
  if (items.length === 0) {
    return <p>No items in inventory. Add something to get started!</p>;
  }



  return (
    <div>
      <ul className="inventory-list">
        {items.map((item) => (
          <li key={item.id} className="inventory-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <ItemCard item={item} />
            <ItemAction id={item.id} onDelete={onDeleteItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryDisplay;

