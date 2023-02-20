import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../chakra/theme";
import { useState } from "react";
import { Router } from "next/router";
import MainLayout from "@/components/Layout/MainLayout";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  Router.events.on("routeChangeStart", () => setIsLoading(true));
  Router.events.on("routeChangeComplete", () => setIsLoading(false));
  Router.events.on("routeChangeError", () => setIsLoading(false));

  return (
    <ChakraProvider theme={theme}>
      <MainLayout isLoading={isLoading}>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}
