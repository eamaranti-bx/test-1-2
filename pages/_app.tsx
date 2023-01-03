import '../styles/main.scss'
import "../components/ui-bx/styles/ui-bx.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
