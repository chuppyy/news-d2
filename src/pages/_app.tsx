import Head from "next/head";
import App, { AppProps, AppContext } from "next/app";
import Layout from "../layouts/layout";
import '../globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        {/* <script defer src="https://videoadstech.org/ads/news_livextop_com.6423cf40-5f94-4916-ae99-f9f89bfa48b1.video.js"></script> */}
        <script async src="https://server.adhub.media/ads/news_livextop_com.2d6c07f4-b57a-4825-94b0-b9db2a7a0a41.display.js"></script>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);
  return {
    ...appProps,
  };
};
