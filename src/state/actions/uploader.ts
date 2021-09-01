/**
 * @packageDocumentation
 * @module State/Actions/Uploader
 * Interacts with the form state.
 */

import * as uploader from '~/state/features/uploaderSlice';
import store from '~/state/store';
import { FilesState } from '~/types/uploader';

/**
 * Gets the files result.
 */
const get = function get() {
  return store.getState().uploader.files;
};

const uploaderActions = {
  /**
   * Gets the files.
   */
  getFiles: (): FilesState[] => get(),

  /**
   * Add files to array
   */
  addFile: (file: FilesState) => {
    store.dispatch(uploader.addFile(file));
  },
};

export default uploaderActions;
