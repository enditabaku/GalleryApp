import GalleryService from '../../services/GalleryService';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGallery = createAsyncThunk(
  'gallery/fetchAllTest',
  async ({section, sort, window, showViral}: any) => {
    const response = await GalleryService.get({section, sort, window, showViral})
    return response.data
  }
)

