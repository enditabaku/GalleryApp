import axios from "axios";

const http = axios.create({
  baseURL: "https://api.imgur.com/3/gallery",
  headers: {
    'Authorization': 'Client-ID b5e163631532b0f'
  }
  // withCredentials: true,
  //https://api.imgur.com/3/gallery/hot/viral/month/1?showViral=true&mature=false&album_previews=false
});

export default http;