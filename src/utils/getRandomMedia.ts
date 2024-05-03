import { MediaEndpointApi } from "../types";
import { clientApiList } from "./clientApiList";
import getRandomElementInArray from "./getRandomElementInArray";

const getRandomMedia = async (type: MediaEndpointApi) => {
  const data = await clientApiList(type, "popular");
  const randomMedia = getRandomElementInArray(data);
  return randomMedia;
};

export default getRandomMedia;
