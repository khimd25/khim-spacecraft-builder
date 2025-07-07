
import React from "react";
import SpacecraftBuilder from "./Components/SpacecraftBuilder.jsx";

console.log('App.jsx loaded');

import styles from "./App.module.css";
import "./index.css"; 



function App ()
{
  return (
    <div className={styles.mainContainer}>

      <SpacecraftBuilder />
    </div>
  );
}

export default App;