import moment from "moment";
import React, { useEffect, useState } from "react";

interface RideProps {
  id: number;
  distance: number;
  startTime: string;
  duration: number;
}

const INITIAL_CHARGE = 1;
const CHARGE_PER_MILE = 0.25 * 5;
const ADDITIONAL_NIGHT_CHARGE = 0.5;
const ADDITIONAL_BUSY_PERIOD_CHARGE = 1;

const calculateTaxiPrice = async (
  startTime: string,
  duration: number,
  distance: number
) => {
  const endTime = endTimeFromDuration(startTime, duration);

  // initial charge
  let price = INITIAL_CHARGE;

  // charge per mile
  price += distance * CHARGE_PER_MILE;

  // additional charge between 20:00 and 06:00
  if (isNightShift(startTime, endTime)) {
    price += ADDITIONAL_NIGHT_CHARGE;
  }

  // additional charge for busy period
  if (isBusyPeriod(startTime, endTime)) {
    price += ADDITIONAL_BUSY_PERIOD_CHARGE;
  }

  return price;
};

// If ride is between 20:00 and 06:00, return true
const isNightShift = (startTime: string, endTime: string) => true;
const isBusyPeriod = (startTime: string, endTime: string) => true;

const durationFromSeconds = (seconds: number, format = "HH:mm:ss") =>
  moment().startOf("day").seconds(seconds).format(format);

const endTimeFromDuration = (startTime: string, duration: number) =>
  moment(startTime).add(duration, "seconds").format("HH:mm:ss");

const Ride = ({ id, distance, startTime, duration }: RideProps) => {
  const [price, setPrice] = useState<number | null>();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    async function getTaxiPrice() {
      const taxiPrice = await calculateTaxiPrice(startTime, duration, distance);
      console.log(`Taxi ${id} price: ${taxiPrice}`);
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
      Id: {id} {price && <span>- Price {price}</span>}{" "}
    </div>
  );
};

export default Ride;
