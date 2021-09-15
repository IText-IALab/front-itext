import { createContext, useContext } from 'react';

import { FilesState } from '~/types/uploader';

export type GlobalFile = {
  filesUploaded: FilesState[];
  setFilesUploaded: (f: File) => void;
};

const UploaderContext = createContext<GlobalFile>({
  filesUploaded: [],
  setFilesUploaded: () => {},
});

// hook
export const useUploaderContext = () => useContext(UploaderContext);

export default UploaderContext;
