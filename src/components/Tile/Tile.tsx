import styles from "./styles.module.css";
import { Stage, TileI } from "../../createTiles";
import { Seed } from "../Plants/Seed/Seed";
import { Tree } from "../Plants/Tree/Tree";
import { Sapling } from "../Plants/Sapling/Sapling";
import { useState } from "react";

const determineNextGrowthStage = (stage: Stage | null): Stage | null => {
  switch (stage) {
    case null:
      return Stage.Seed;
    case Stage.Seed:
      return Stage.Sapling;
    case Stage.Sapling:
      return Stage.Tree;
    case Stage.Tree:
      return Stage.Tree;
    default:
      return stage;
  }
};

export const Tile = (props: {
  tile: { id: number; title: string; left: string; top: string; stage: null };
  style: any;
}) => {
  const [tile, setTile] = useState<TileI["tile"]>(props.tile);

  const handleClick = () => {
    console.log(tile.id);
    setTile((tile) => ({
      ...tile,
      stage: determineNextGrowthStage(tile.stage),
    }));
  };

  return (
    <div
      className={tile.stage ? styles.centeredTile : styles.tile}
      style={props.style}
      onClick={handleClick}
    >
      {(() => {
        switch (tile.stage) {
          case Stage.Seed:
            return <Seed />;
          case Stage.Sapling:
            return <Sapling />;
          case Stage.Tree:
            return <Tree />;
          default:
            return; //tile.title;
        }
      })()}
    </div>
  );
};
