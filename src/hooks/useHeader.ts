import { useQuery } from "@tanstack/react-query";
import { MediaEndpointApi } from "../types";
import { buildImageUrl } from "../utils/buildImageUrl";
import { clientApiMedia } from "../utils/clientApiMedia";
import getRandomMedia from "../utils/getRandomMedia";
import getRandomTypeMedia from "../utils/getRandomTypeMedia";

const useHeader = (typeMedia?: MediaEndpointApi, id?: number) => {
  
  const mediaHeader = typeMedia ?? getRandomTypeMedia();
  const paramEndpointHeader: "latest" | number = id ?? "latest";

  const getHeaderMediaId = async () => {
    if (id) return clientApiMedia(mediaHeader, id);

    return getRandomMedia(mediaHeader);
  };

  const { data, error, isError, isLoading } = useQuery({
    queryKey: [`${mediaHeader}/${paramEndpointHeader}`],
    queryFn: getHeaderMediaId,
    retry: 2,
  });

  const bannerMediaSource = buildImageUrl("original", data?.backdrop_path);

  return { data, error, isError, isLoading, bannerMediaSource, id };
};

export default useHeader;
