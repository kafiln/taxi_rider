import React from "react";
import Ride from "./Ride";
import { RideProps } from "./types";

const HeaderColumns = [
  "Clicked?",
  "ID",
  "Price",
  "Distance",
  "Start",
  "End",
  "Duration",
];

interface RideTableProps {
  rides: RideProps[];
}

const RideTable = ({ rides }: RideTableProps) => {
  return (
    <table className="table border">
      <thead className="table-light">
        <tr>
          {HeaderColumns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rides.map((ride) => (
          <Ride {...ride} key={ride.id} />
        ))}
      </tbody>
    </table>
  );
};

export default RideTable;
