import React from 'react';
import styles from './ItemAction.module.css'; 

const ItemAction = ({ id, onDelete }) => {
  const handleClick = () => {
    onDelete(id);
  };

  return (
    <button
      onClick={handleClick}
      className="btn btn-delete"
      style={{
        marginLeft: '1rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#e74c3c',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      Delete
    </button>
  );
};

export default ItemAction;
