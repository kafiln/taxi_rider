import { Injectable } from '@nestjs/common';
import * as moment from 'moment';

const INITIAL_CHARGE = 1;
const CHARGE_PER_MILE = 0.25 * 5;
const ADDITIONAL_NIGHT_CHARGE = 0.5;
const ADDITIONAL_BUSY_PERIOD_CHARGE = 1;

//TODO: unit test
const endTimeFromDuration = (startTime: string, duration: number) =>
  moment(startTime).add(duration, 'seconds').toISOString();

//TODO: unit test
// If ride is between 20:00 and 06:00, return true otherwise false
const isNightShift = (startTime: string, endTime: string) => {
  const startHour = moment(startTime).get('hours');
  const endHour = moment(endTime).get('hours');
  // check if the ride started at night or ended at night or both
  return (startHour >= 20 && startHour < 6) || (endHour >= 20 && endHour < 6);
};
// If ride is between 16:00 and 19:00, return true otherwise false
//TODO: unit test
const isBusyPeriod = (startTime: string, endTime: string) => {
  const startHour = moment(startTime).get('hours');
  const endHour = moment(endTime).get('hours');
  // check if the ride started at busy hour or ended at busy hour or both
  return (startHour >= 16 && startHour < 19) || (endHour >= 16 && endHour < 19);
};

@Injectable()
export class AppService {
  //TODO: unit test
  getPrice(startTime: string, duration: number, distance: number): number {
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
  }
}
