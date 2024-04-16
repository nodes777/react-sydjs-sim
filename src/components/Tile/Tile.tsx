import styles from "./styles.module.css";
import { Stage, TileI } from "../../createTiles";
import { Seed } from "../Plants/Seed/Seed";
import { Flower } from "../Plants/Flower/Flower";
import { Sprout } from "../Plants/Sprout/Sprout";
import { useState } from "react";

const determineNextGrowthStage = (stage: Stage | null): Stage | null => {
  switch (stage) {
    case null:
      return Stage.Seed;
    case Stage.Seed:
      return Stage.Sprout;
    case Stage.Sprout:
      return Stage.Flower;
    case Stage.Flower:
      return Stage.Flower;
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
          case Stage.Sprout:
            return <Sprout />;
          case Stage.Flower:
            return <Flower />;
          default:
            return tile.title;
        }
      })()}
    </div>
  );
};
