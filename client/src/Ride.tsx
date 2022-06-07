import React, { useEffect, useState } from "react";
import { getPriceApi } from "./api";
import { RideProps } from "./types";
import { durationFromSeconds, endTimeFromDuration } from "./utils";

const Ride = ({ id, distance, startTime, duration }: RideProps) => {
  const [price, setPrice] = useState<number | null>();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    async function getTaxiPrice() {
      const taxiPrice = await getPriceApi(startTime, duration, distance);
      setPrice(taxiPrice);
    }
    getTaxiPrice();
  }, [distance, duration, startTime, id]);

  const handleClick = () => {
    setClicked(true);
    const message = `${durationFromSeconds(duration)} - ${endTimeFromDuration(
      startTime,
      duration
    )}`;
    alert(message);
  };

  return (
    <div
      style={{ backgroundColor: distance > 2 ? "red" : "" }}
      onClick={handleClick}
    >
      {clicked && <span>Clicked </span>}
      Id: {id} {price && <span>- Price {price}</span>}
    </div>
  );
};

export default Ride;
