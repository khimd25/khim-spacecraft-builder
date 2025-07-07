import { useState } from "react";
import React from "react";
import ItemForm from "./ItemForm.jsx";
import InventoryDisplay from "./InventoryDisplay.jsx";
import styles from "./SpacecraftBuilder.module.css";


const SpacecraftBuilder = () => {
    const [inventory, setInventory] = React.useState([]);

    const addItem = (item) => {
        const newItem = {...item, id: Date.now()};
        setInventory((prev) => [...prev, newItem]);

    const deleteItem = (id) => {
        setInventory((prev) => prev.filter(item => item.id !== id));

    }
        return (
            <>
            <ItemForm onAddItem={addItem}/>
            <InventoryDisplay items={inventory} onDeleteItem={deleteItem} />
            </>
        );
        }
    }
    
export default SpacecraftBuilder;
console.log("SpacecraftBuilder component loaded");
