import './app.scss';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import { StyleSheetManager } from 'styled-components';
import App from 'next/app';


const GlobalStyle = createGlobalStyle`
  // Your global styles here
`;

// pages/_app.js



class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    // Filter out specific props here
    const filteredProps = {
      ...pageProps,
      showmenu: undefined,
      showclose: undefined,
      fadein: undefined,
    };

    return (
      <StyleSheetManager shouldForwardProp={(prop) => prop !== 'showmenu' && prop !== 'showclose' && prop !== 'fadein'}>
        <Head>
            {/* Google Verification */}
    
            <meta name="google-site-verification" content="nig_fPGnY-4TgjNKm7qeNndHHb8ddpfTKF5xKQURJpw" />
    
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta property="og:type" content="website" />
          </Head>
        <Component {...filteredProps} />
      </StyleSheetManager>
    );
  }
}

export default MyApp;
