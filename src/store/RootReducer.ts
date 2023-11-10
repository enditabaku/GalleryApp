import { combineReducers } from "redux";
import galleryReducer from "./features/GallerySlice";


const RootReducer = combineReducers({
  gallery: galleryReducer.reducer,
});

export default RootReducer;
