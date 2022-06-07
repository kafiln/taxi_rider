const API_URL = "/price";

export const getPriceApi = async (
  startTime: string,
  duration: number,
  distance: number
) =>
  await fetch(
    `${API_URL}?startTime=${startTime}&duration=${duration}&distance=${distance}`
  ).then((res) => res.json());
