import React from "react";
import Ride from "./Ride";
import rides from "./rides.json";
import { RideProps } from "./types";
function App() {
  return (
    <div className="container">
      <h1 className="text-center my-4">Taxi rider App </h1>
      <ul className="list-group">
        {rides.map((ride: RideProps) => (
          <Ride {...ride} key={ride.id} />
        ))}
      </ul>
    </div>
  );
}

export default App;
