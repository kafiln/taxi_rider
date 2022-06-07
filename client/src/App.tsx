import React from "react";
import Ride from "./Ride";
import rides from "./rides.json";
function App() {
  return (
    <>
      <div>Taxi rider App </div>
      <ul>
        {rides && rides.map((ride, index) => <Ride {...ride} key={index} />)}
      </ul>
    </>
  );
}

export default App;
