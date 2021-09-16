import React, { useState } from 'react';

import UploaderContext from '~/providers/uploader/UploaderContext';
import { FilesState } from '~/types/uploader';

const UploaderProvider = (props: any) => {
  const [files, setFiles] = useState<FilesState[]>([]);

  const setFilesUploaded = (file: File) => {
    const newFile: FilesState = {
      file,
      imageUrl: URL.createObjectURL(file),
    };
    setFiles((f) => [...f, newFile]);
  };

  const value = {
    setFilesUploaded,
    filesUploaded: files,
  };

  return <UploaderContext.Provider value={value}>{props.children}</UploaderContext.Provider>;
};

export default UploaderProvider;
