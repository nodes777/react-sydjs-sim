import React, { useState } from "react";
import "./App.css";
import styles from "./styles.module.css";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { Snow } from "./components/Snow/Snow";
import { TileGrid } from "./components/TileGrid/TileGrid";
import { createTiles } from "./createTiles";

function App() {
  const [isSnowing, setIsSnowing] = useState(false);
  return (
    <>
      <Toolbar setIsSnowing={setIsSnowing} isSnowing={isSnowing} />
      {isSnowing && <Snow />}
      <div className={styles.tileContainer}>
        <TileGrid tiles={createTiles()} />
      </div>
    </>
  );
}

export default App;
