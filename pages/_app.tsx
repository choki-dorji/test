import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/store/store";
import { NextUIProvider } from "@nextui-org/react";
import { CookiesProvider } from "react-cookie";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <CookiesProvider>
          <Component {...pageProps} />
        </CookiesProvider>
      </NextUIProvider>
    </Provider>
  );
}
