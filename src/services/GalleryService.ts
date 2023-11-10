import http from "../config/http.common";
import { GalleryUrlObjectTypes } from "../utils/types";
import { SECTION_DEFAULT, SORT_DEFAULT, WINDOW_DEFAULT } from "../utils/constants";


const get = ({section = SECTION_DEFAULT, sort = SORT_DEFAULT, window = WINDOW_DEFAULT, showViral = true}: GalleryUrlObjectTypes) => {
  return http.get(`/${section}/${sort}/${window}/1`, {
    params: {
      showViral: showViral,
      mature: false,
      album_previews: false
    },
  }
  );
};

const GalleryService = {
  get,
};

export default GalleryService;
