import { createSlice } from "@reduxjs/toolkit";
import { IGallery } from "../../model/ImageModel";
import { fetchGallery } from "../actions/GalleryAction";

interface Igallerystate {
  loading: boolean;
  gallery?: IGallery | null;
  error : string;
}

const initalState: Igallerystate = {
  loading: false,
  gallery: null,
  error: ''
};

export const galleryReducer = createSlice({
  name: "gallery",
  initialState: initalState,
  reducers: {
  },
  extraReducers(builder) {
      builder.addCase(fetchGallery.pending, (state) => {
        state.loading = true
      })
      builder.addCase(fetchGallery.fulfilled, (state, action) => {
        state.loading = false,
        state.gallery = action.payload
        state.error = ''
      })
      builder.addCase(fetchGallery.rejected, (state, action) => {
        state.loading = false,
        state.gallery = null,
        state.error = action.error.message ?? ''
      })
  },

});


export default galleryReducer;
