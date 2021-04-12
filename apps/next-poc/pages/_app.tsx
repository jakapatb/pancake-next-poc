import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ReactComponent as NxLogo } from "../public/nx-logo-white.svg";
import { ModalProvider, light } from "@jakapatb/pancake-uikit";

import "./styles.css";
import { ThemeProvider } from "styled-components";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to next-poc!</title>
      </Head>
      <div className="app">
        <header className="flex">
          <NxLogo width="75" height="50" />
          <h1>Welcome to next-poc!</h1>
        </header>
        <main>
          <ThemeProvider theme={light}>
            <ModalProvider>
              <Component {...pageProps} />
            </ModalProvider>
          </ThemeProvider>
        </main>
      </div>
    </>
  );
}

export default CustomApp;
