import React from 'react';
import styles from './ItemCard.module.css'; 
const ItemCard = ({ item }) => {
    <div 
    className="item-card">
    style={{ flex:1, padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', marginRight: '1rem' }}
        <h3 style={{ margin: '0 0 0.5rem' }}>{item.name}</h3>
        <p style={{ margin: '0.5rem 0' }}>Quantity: <strong>{item.quantity} </strong></p>
        <p style={{ margin: '0.5rem 0' }}>Purpose: <strong>{item.purpose}</strong></p>
        </div>
};
        
        export default ItemCard;
        