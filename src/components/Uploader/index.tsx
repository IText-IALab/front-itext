import { Fragment, useCallback, useEffect, useState } from 'react';

import { Box, Card, CardActionArea, CardContent, CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import { useSelector } from 'react-redux';

import Uploader, { FilesState } from './DragDrop';
import styles from './index.module.scss';
import { uploaderSelector } from '~/state/features/uploaderSlice';

const useStyles = makeStyles({
  root: {
    alignContent: 'center',
    maxWidth: 200,
  },
});

const ScreenUploader = () => {
  const classes = useStyles();
  const [filesLoad, setFilesLoad] = useState<FilesState | []>([]);
  const [filesCopy, setFilesCopy] = useState<FilesState | []>([]);
  const filesRedux = useSelector(uploaderSelector);

  useEffect(() => {
    console.log(filesRedux);
    if (filesLoad.length > 0) {
      setTimeout(() => {
        setFilesLoad([]);
      }, 6000);
    }
  }, [filesLoad]);
  const triggerFileLoad = useCallback(
    (files: FilesState) => {
      const newState = [...filesLoad, ...files];
      setFilesLoad(newState as FilesState);
    },
    [filesLoad],
  );

  const customLoader = ({ src }: { src: any }) => `${src}`;
  const onChange = (files: FilesState) => {
    triggerFileLoad(files);
    const stateAux = [...filesCopy, ...files];
    setFilesCopy(stateAux as FilesState);
  };
  return (
    <Fragment>
      <Box paddingTop="40px">
        <Uploader onChange={onChange} multiple={false} accept="image/jpg, image/jpeg, image/png, application/pdf" />
      </Box>
      {filesLoad.length > 0 && (
        <Box display="flex" justifyContent="center" alignItems="center" marginY="30px">
          <CircularProgress />
        </Box>
      )}
      <div className={styles.file_list}>
        {filesRedux.files.map((file, i) => (
          <Card className={classes.root} key={`${file.imageUrl}${i.toString()}`}>
            <CardActionArea>
              <Image loader={customLoader} alt="Avatar" width={120} height={140} src={file.imageUrl} />
              <CardContent>
                <Typography gutterBottom component="p">
                  {file.file.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </Fragment>
  );
};

export default ScreenUploader;
