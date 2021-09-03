import React, { useState, useCallback } from 'react';

import { useDropzone } from 'react-dropzone';

import styles from './index.module.scss';
import uploaderController from '~/controller/uploader';
import i18n from '~/internationalization';
import { useUploaderContext } from '~/providers/uploader/UploaderContext';

type DataImage = {
  name?: string;
  imageURL?: string;
};

type PropertyUpload = {
  isUpload: boolean;
  name: string;
  error: string | null;
};

export type FilesState = File & { src: string; imageUrl: string; property: PropertyUpload }[];

interface UploaderProps {
  onChange?: (file: FilesState) => unknown;
  multiple?: boolean;
  title?: string;
  accept?: string;
}

const Uploader = ({ onChange, multiple = true, title = '', accept = 'image/*' }: UploaderProps) => {
  const [files, setFiles] = useState<DataImage[]>([] as DataImage[]);
  const placeholder = title || i18n.get('PLACEHOLDER_UPLOADER_DRAG');
  const { setFilesUploader } = useUploaderContext();

  const foo = (acceptedFiles: any[]) => {
    if (acceptedFiles.length === 0) return;
    acceptedFiles.forEach((file: File) => setFilesUploader(file));
  };
  const { getRootProps, getInputProps } = useDropzone({
    accept,
    multiple,
    onDrop: useCallback(foo, []),
  });

  return (
    <section className="uploader">
      <div className={styles.container_uploader} {...getRootProps()}>
        <input {...getInputProps()} />
        <span>
          <span>{placeholder}</span>
        </span>
      </div>
    </section>
  );
};

export default Uploader;
