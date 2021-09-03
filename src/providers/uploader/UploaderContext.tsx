import { createContext, useContext } from 'react';

import { FilesState } from '~/types/uploader';

export type GlobalFile = {
  filesUploader: FilesState[];
  setFilesUploader: (f: File) => void;
};

const UploaderContext = createContext<GlobalFile>({
  filesUploader: [],
  setFilesUploader: () => {},
});

// hook
export const useUploaderContext = () => useContext(UploaderContext);

export default UploaderContext;
