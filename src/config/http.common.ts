import axios from "axios";
import { Client_Imgur } from "../utils/config_galleryApi";

const http = axios.create({
  baseURL: "https://api.imgur.com/3/gallery",
  headers: {
    'Authorization': `Client-ID ${Client_Imgur.CLIENT_ID}`
  }
  // withCredentials: true,
  //https://api.imgur.com/3/gallery/hot/viral/month/1?showViral=true&mature=false&album_previews=false
});

export default http;