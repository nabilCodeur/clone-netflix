import { MediaEndpointApi } from "../types";
import getRandomElementInArray from "./getRandomElementInArray";

const getRandomTypeMedia = (): MediaEndpointApi => {
  const possibilites: [MediaEndpointApi, MediaEndpointApi] = ["tv", "movie"];

  return getRandomElementInArray(possibilites);
};

export default getRandomTypeMedia;
