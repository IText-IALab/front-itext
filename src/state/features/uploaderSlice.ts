/* eslint-disable no-param-reassign */
/**
 * @packageDocumentation
 * @module State/Features/Uploader
 * Contains the uploader feature.
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '~/state/store';
import { FilesState } from '~/types/uploader';

export type ArrayFilesState = {
  files: FilesState[];
};

const initialState: ArrayFilesState = {
  files: [],
};

const uploaderSlice = createSlice({
  name: 'uploader',
  initialState,
  reducers: {
    addFile: (state: ArrayFilesState, action: PayloadAction<FilesState>) => {
      state.files.push(action.payload);
    },
  },
});

export const uploaderSelector = (state: RootState): ArrayFilesState => state.uploader;

export const { addFile } = uploaderSlice.actions;

export default uploaderSlice.reducer;
