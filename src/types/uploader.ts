/**
 * @packageDocumentation
 * @hidden
 * Has the types of form.
 */

export type PropertyUpload = {
  isUpload: boolean;
  name: string;
  error: string | null;
};

export type FilesState = { src?: string; imageUrl: string; file: File };
