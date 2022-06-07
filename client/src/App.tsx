import React from "react";
import Ride from "./Ride";
import rides from "./rides.json";

function App() {
  return (
    <div className="container">
      <h1 className="text-center my-4">Taxi rider App </h1>
      <table className="table border">
        <thead className="table-light">
          <tr>
            <th>Clicked ?</th>
            <th>ID</th>
            <th>Price</th>
            <th>Distance</th>
            <th>StartTime</th>
            <th>EndTime</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {rides.map((ride) => (
            <Ride {...ride} key={ride.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
