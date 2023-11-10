import http from "../config/http.common";

const get = ({size = 2}) => {
  return http.get("/hot/viral/month/1?showViral=true&mature=false&album_previews=false", {
    // params: {
    //   size: size,
    // },
  }
  );
};

const GalleryService = {
  get,
};

export default GalleryService;
