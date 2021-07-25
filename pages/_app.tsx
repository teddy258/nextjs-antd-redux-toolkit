import "../styles/globals.css";
import "antd/dist/antd.min.css";
import type { AppProps } from "next/app";
import { rootStore } from "../store/index";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={rootStore}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
