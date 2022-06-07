import React from "react";
import Ride from "./Ride";
import rides from "./rides.json";
import { RideProps } from "./types";
function App() {
  return (
    <>
      <h1>Taxi rider App </h1>
      <ul>
        {rides.map((ride: RideProps) => (
          <Ride {...ride} key={ride.id} />
        ))}
      </ul>
    </>
  );
}

export default App;
