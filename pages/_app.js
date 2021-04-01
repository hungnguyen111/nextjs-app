import '../styles/globals.scss';
import '../styles/header.scss';
import '../styles/home.scss';

//font awesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
