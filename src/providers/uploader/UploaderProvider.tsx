import React, { useState } from 'react';

import UploaderContext from '~/providers/uploader/UploaderContext';
import { FilesState } from '~/types/uploader';

const UploaderProvider = (props: any) => {
  const [files, setFiles] = useState<FilesState[]>([]);

  const setFilesUploader = (file: File) => {
    const newFile: FilesState = {
      file,
      imageUrl: URL.createObjectURL(file),
    };
    setFiles((f) => [...f, newFile]);
  };

  const value = {
    setFilesUploader,
    filesUploader: files,
  };

  return <UploaderContext.Provider value={value}>{props.children}</UploaderContext.Provider>;
};

export default UploaderProvider;
