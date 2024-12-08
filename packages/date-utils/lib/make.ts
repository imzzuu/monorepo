export const makeDateTimeFromSingleParameter = ({
  year,
  month,
  day,
  hour = 0,
  minute = 0,
  second = 0,
}: {
  year: number;
  month: number;
  day: number;
  hour?: number;
  minute?: number;
  second?: number;
}) => {
  return { year, month, day, hour, minute, second };
};
export const makeDateTimeFromMultipleParams = (
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second: number
) => {
  return { year, month, day, hour, minute, second };
};
