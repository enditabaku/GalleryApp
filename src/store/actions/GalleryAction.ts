import GalleryService from '../../services/GalleryService';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGallery = createAsyncThunk(
  'gallery/fetchAllTest',
  async ({size}: any) => {
    const response = await GalleryService.get({size: size})
    return response.data
  }
)

