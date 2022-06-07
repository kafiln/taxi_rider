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
    <tr
      className={` ${distance > 2 && "table-danger"}`}
      style={{ cursor: "pointer" }}
      onClick={handleClick}
    >
      <td> {clicked ? "✅" : "❌"}</td>
      <td>{id}</td>
      <td>{price} €</td>
      <td>{`${distance} mile${distance > 1 ? "s" : ""}`}</td>
      <td>{endTimeFromDuration(startTime, 0)}</td>
      <td>{endTimeFromDuration(startTime, duration)}</td>
      <td>{durationFromSeconds(duration)}</td>
    </tr>
  );
};

export default Ride;
