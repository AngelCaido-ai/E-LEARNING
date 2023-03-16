/* eslint-disable import/no-default-export */
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

import dayjs from "dayjs";
import { AppContext, AppProps } from "next/app";

import "dayjs/locale/ru";

dayjs.locale("ru");

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}

App.getInitialProps = async ({ ctx, Component }: AppContext) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps,
  };
};
