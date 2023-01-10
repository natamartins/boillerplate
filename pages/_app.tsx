import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "../src/styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React avançado - Boilerplate</title>
        <link rel="shortcut icon" href="" />
        <link rel="apple-touch-icon" href="" />
        <meta
          name="decription"
          content="project react, nextjs and styled-component"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
