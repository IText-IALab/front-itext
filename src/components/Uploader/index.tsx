import { Fragment, useEffect, useState } from 'react';

import { Button, Box, Card, CardActionArea, CardContent, CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import { useSelector } from 'react-redux';

import Uploader, { FilesState } from './DragDrop';
import styles from './index.module.scss';
import uploaderController from '~/controller/uploader';
import { useUploaderContext } from '~/providers/uploader/UploaderContext';
import { uploaderSelector } from '~/state/features/uploaderSlice';
import { getFile } from '~/utils/ToBase64';

const useStyles = makeStyles({
  root: {
    alignContent: 'center',
    maxWidth: 200,
  },
});

const ScreenUploader = () => {
  const classes = useStyles();
  const [filesLoad, setFilesLoad] = useState<FilesState | []>([]);
  const { filesUploaded } = useUploaderContext();
  const { text } = useSelector(uploaderSelector);

  useEffect(() => {
    if (filesLoad.length > 0) {
      setTimeout(() => {
        setFilesLoad([]);
      }, 6000);
    }
  }, [filesLoad]);

  const customLoader = ({ src }: { src: any }) => `${src}`;

  useEffect(() => {
    if (text !== '') {
      uploaderController.sendDocuments(text);
    }
  }, [text]);

  return (
    <Fragment>
      <Box paddingTop="40px">
        <Uploader
          multiple={false}
          accept="image/jpg, image/jpeg, image/png, application/pdf"
          disabled={filesUploaded.length > 0}
        />
      </Box>
      {filesLoad.length > 0 && (
        <Box display="flex" justifyContent="center" alignItems="center" marginY="30px">
          <CircularProgress />
        </Box>
      )}
      <div className={styles.file_list}>
        {filesUploaded.length > 0 &&
          filesUploaded.map((file, i) => (
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
        <Button
          disabled={filesUploaded.length === 0}
          onClick={() => {
            getFile(filesUploaded[0].file);
          }}
        >
          Enviar
        </Button>
      </div>
    </Fragment>
  );
};

export default ScreenUploader;
