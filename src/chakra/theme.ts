import { extendTheme, useColorModeValue } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#FF3c00",
    },
  },
  styles: {
    global: () => ({
      body: {
        bg: useColorModeValue("#E4D8B4", "gray.900"),
        color: useColorModeValue("#282425", "white"),
      },
    }),
  },
});
