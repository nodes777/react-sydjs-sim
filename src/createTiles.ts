import { useState } from "react";

export interface TileI {
  tile: {
    id: number;
    title: string;
    left: string;
    top: string;
    stage: null | Stage;
  };
  setTile: React.Dispatch<
    React.SetStateAction<{
      id: number;
      title: string;
      left: string;
      top: string;
      stage: null | Stage;
    }>
  >;
}

export enum Stage {
  Seed = "Seed",
  Sapling = "Sprout",
  Tree = "Tree",
}

const gridSize = 10;
const angleIncrement = 45;

// Next Steps:
// Add growth loop
// Add interaction on hover

export const createTiles = () => {
  const tiles = [];

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const offsetX = i * -angleIncrement;
      const offsetY = i * angleIncrement;
      const coordX = j * angleIncrement + offsetX;
      const coordY = j * angleIncrement + offsetY;

      const left = `${coordX}px`;
      const top = `${coordY}px`;

      const id = i * gridSize + j;

      tiles.push({
        id,
        title: `Tile ${i}, ${j} `,
        left,
        top,
        stage: null,
      });
    }
  }

  return tiles;
};
