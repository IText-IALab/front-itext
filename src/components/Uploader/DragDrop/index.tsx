import React, { useCallback } from 'react';

import { useDropzone } from 'react-dropzone';

import styles from './index.module.scss';
import i18n from '~/internationalization';
import { useUploaderContext } from '~/providers/uploader/UploaderContext';

type PropertyUpload = {
  isUpload: boolean;
  name: string;
  error: string | null;
};

export type FilesState = File & { src: string; imageUrl: string; property: PropertyUpload }[];

interface UploaderProps {
  multiple?: boolean;
  title?: string;
  accept?: string;
}

const Uploader = ({ multiple = true, title = '', accept = 'image/*' }: UploaderProps) => {
  const placeholder = title || i18n.get('PLACEHOLDER_UPLOADER_DRAG');
  const { setFilesUploaded } = useUploaderContext();

  const foo = (acceptedFiles: any[]) => {
    if (acceptedFiles.length === 0) return;
    acceptedFiles.forEach((file: File) => setFilesUploaded(file));
  };
  const { getRootProps, getInputProps } = useDropzone({
    accept,
    multiple,
    onDrop: useCallback(foo, [setFilesUploaded]),
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
