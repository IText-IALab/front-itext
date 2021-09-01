import { useEffect, Fragment } from 'react';

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import NavBar from '~/components/NavBar';
import CONFIG from '~/config';
import formController from '~/controller/form';
import todosController from '~/controller/todos';
import i18n from '~/internationalization';
import store from '~/state/store';
import '~/scss/globals.scss';

// TODO: Delete if you won't use it.
// import googleRecaptchaV3 from '~/services/googleRecaptchaV3';
// import keycloakService from '~/services/keycloak';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    const start = async () => {
      // TODO: HERE YOU SHOULD ADD ASYNC THINGS AT THE START OF THE APPLICATION.
      // FOR EXAMPLE, THE REAPTCHA.
      // await googleRecaptchaV3.addScript();
      // keycloakService.initKeycloak(onAuthenticatedCallback);
      formController.getMostUsedWordsFromLocalStorage();
      todosController.getFromLocalStorage();
    };
    start();
  }, []);

  return (
    <Fragment>
      <Head>
        <link rel="icon" type="image/png" href={`${CONFIG.ABSOLUTE_URL}/favicon.png`} />
      </Head>
      <NextSeo description={i18n.get('WEBSITE_DESCRIPTION')} />
      <Provider store={store}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <header className="header">
            <NavBar />
          </header>
          <div className="body">
            <div className="responsiveContainer">
              <Component {...pageProps} />
            </div>
          </div>
        </MuiPickersUtilsProvider>
      </Provider>
    </Fragment>
  );
};
export default MyApp;
