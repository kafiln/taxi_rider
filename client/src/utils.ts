import moment from "moment";

const FORMAT = "HH:mm:ss";

export const durationFromSeconds = (seconds: number, format = FORMAT) =>
  moment().startOf("day").seconds(seconds).format(format);

export const endTimeFromDuration = (
  startTime: string,
  duration: number,
  format = FORMAT
) => moment(startTime).add(duration, "seconds").format(format);
