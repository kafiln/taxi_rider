import React from "react";
import rides from "./rides.json";
import RideTable from "./RideTable";

function App() {
  return (
    <div className="container">
      <h1 className="text-center my-4">Taxi rider App </h1>
      <RideTable rides={rides} />
    </div>
  );
}

export default App;
