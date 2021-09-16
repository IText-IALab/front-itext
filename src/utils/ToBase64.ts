import uploaderActions from '~/state/actions/uploader';

type callBack = (error: any, result: any) => void;

const removeComma = (result: string): string => {
  const withoutComma = result.split(',').pop();
  if (withoutComma === undefined) {
    return '';
  }
  return withoutComma;
};

export const fileToBase64 = (file: File, cb: callBack) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    // console.log('este es el base 64', reader.result);
    cb(null, reader.result);
  };
  reader.onerror = (error) => {
    cb(error, null);
  };
};

export const getFile = (file: File) => {
  const response = fileToBase64(file, (err, result) => {
    if (result) {
      uploaderActions.setFileString(removeComma(result));
    }
    if (err) {
      uploaderActions.setFileString(err);
    }
  });
  return response;
};
