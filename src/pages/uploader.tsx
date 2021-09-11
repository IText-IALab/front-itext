import { Fragment } from 'react';

import { NextSeo } from 'next-seo';

import ScreenUploader from '../components/Uploader';
import i18n from '~/internationalization';
import UploaderProvider from '~/providers/uploader/UploaderProvider';

const UploaderScreen = () => (
  <UploaderProvider>
    <Fragment>
      <NextSeo title={`${i18n.get('NAVIGATION_UPLOAD')} | Poder Judicial del Perú`} />
      <ScreenUploader />
    </Fragment>
  </UploaderProvider>
);

export default UploaderScreen;
