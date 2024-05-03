import { useQuery } from "@tanstack/react-query";
import { MediaEndpointApi } from "../types";
import getRandomMedia from "../utils/getRandomMedia";
import getRandomTypeMedia from "../utils/getRandomTypeMedia";
import { buildImageUrl } from "../utils/buildImageUrl";
import { clientApiMedia } from "../utils/clientApiMedia";

const useHeader = (typeMedia?: MediaEndpointApi, id?: number) => {
  const mediaHeader = typeMedia ?? getRandomTypeMedia();

  const getHeaderMediaId = async () => {
    if (id) return clientApiMedia(mediaHeader, id);
    return getRandomMedia(mediaHeader);
  };

  const paramEndpointHeader: "latest" | number = id ?? "latest";

  const { data, error, isError, isLoading } = useQuery({
    queryKey: [`${mediaHeader}/${paramEndpointHeader}`],
    queryFn: getHeaderMediaId,
  });

  const bannerMediaSource = buildImageUrl("original", data?.backdrop_path);

  return { data, error, isError, isLoading, bannerMediaSource };
};

export default useHeader;
