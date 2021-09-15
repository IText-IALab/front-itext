/**
 * @packageDocumentation
 * @module Controller/Uploader
 * Saves and gets contents from local storage.
 */

import uploaderService from '~/services/Uploader';
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

  /**
   * Send documents to extractor
   */
  sendDocuments: async (text: string): Promise<void> => {
    try {
      const doc = {
        base64: text,
      };
      const res = await uploaderService.sendDocuments(doc);
      if (res.success) {
        console.log('success');
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default uploaderController;
