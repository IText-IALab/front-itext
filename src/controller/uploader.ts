/**
 * @packageDocumentation
 * @module Controller/Uploader
 * Saves and gets contents from local storage.
 */

import uploaderActions from '~/state/actions/uploader';
import { FilesState } from '~/types/uploader';

/**
 * Actions to execute on the uploader.
 */
const uploaderController = {
  /**
   * Saves new file in state.
   */
  saveFile: (file: File): void => {
    const newFile: FilesState = {
      file,
      imageUrl: URL.createObjectURL(file),
    };
    uploaderActions.addFile(newFile);
  },
};

export default uploaderController;
