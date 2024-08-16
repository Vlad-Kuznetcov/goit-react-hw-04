import axios from "axios";

export const fetchImages = async (query, page) => {
  const params = {
    headers: {
      "Accept-Version": "v1",
    },
    params: {
      query,
      client_id: "vivgPiX3Rb3O3Yaqm83YtMDNN1ijTLMUZw0vGsQYI9M",
      page,
      per_page: 10,
    },
  };
  const { data } = await axios.get(
    "https://api.unsplash.com/search/photos",
    params
  );
  return data;
};
