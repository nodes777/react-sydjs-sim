import { Tile } from "../Tile/Tile";
import { TileI } from "../../createTiles";

export const TileGrid = (props: {
  tiles: {
    id: number;
    title: string;
    left: string;
    top: string;
    stage: null;
  }[];
}) => {
  return (
    <div>
      {props.tiles.map((tile) => (
        <Tile
          key={tile.id}
          tile={tile}
          style={{
            left: `${tile.left}`,
            top: `${tile.top}`,
          }}
        />
      ))}
    </div>
  );
};
