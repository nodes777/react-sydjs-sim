import React, { useState } from "react";
import "./App.css";
import styles from "./styles.module.css";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { Rain } from "./components/Rain/Rain";
import { TileGrid } from "./components/TileGrid/TileGrid";
import { createTiles } from "./createTiles";

function App() {
  const [isRaining, setIsRaining] = useState(false);
  return (
    <>
      <Toolbar setIsRaining={setIsRaining} isRaining={isRaining} />
      {isRaining && <Rain />}
      <div className={styles.tileContainer}>
        <TileGrid tiles={createTiles()} />
      </div>
    </>
  );
}

export default App;
