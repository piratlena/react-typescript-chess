import React, { FC } from "react";
import "../App.css";
import { Cell } from "../models/Cell";

interface CellsProps {
  cell: Cell;
}

const CellComponent: FC<CellsProps> = ({ cell }) => {
  return (
    <div className={["cell", cell.color].join(" ")}>
      {cell.figure?.logo && <img src={cell.figure.logo} alt="figure" />}
    </div>
  );
};

export default CellComponent;
