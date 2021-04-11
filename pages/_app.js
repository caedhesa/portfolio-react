import React, { useEffect } from "react";

//MATERIAL UI COMPONENTS
import {
  CssBaseline,
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core";

//NEXTJS COMPONENTS
import Head from "next/head";
import { useRouter } from "next/router";

//CUSTOM COMPONENTS
import Layout from "../components/layout/";

//UTILS
import { useDarkMode } from "../styles/themeObject";
import { Provider } from "react-awesome-slider/dist/navigation";
import useTranslation from "../components/translate";

//GLOBAL STYLES
import "../styles/globals.scss";

function App({ Component, pageProps }) {
  const router = useRouter();
  const [, setLanguage] = useTranslation();
  const [theme, toggleDarkMode] = useDarkMode();
  const themeConfig = responsiveFontSizes(createMuiTheme(theme));

  //BROWSER LANGUAGE DETECTION
  useEffect(() => {
    const { language } = window.navigator;
    const lang = language.substring(0, 2);
    setLanguage(lang);
  }, []);

  return (
    <ThemeProvider theme={themeConfig}>
      <CssBaseline />
      <Provider slug={router.route}>
        <Head>
          <title>Portfolio website</title>
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=0.8,maximum-scale=1,user-scalable=no"
          />
          <meta
            name="description"
            content="Portfolio website, built with Next.js."
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          ></link>
          <meta property="og:url" content="google.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Portfolio website" />
          <meta name="twitter:card" content="summary" />
          <meta property="og:description" content="Built with Next.js" />
          <meta property="og:image" content="/work1_dark.png" />
        </Head>
        <Layout toggleDarkMode={toggleDarkMode}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
