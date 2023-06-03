import { extendTheme, useColorModeValue } from "@chakra-ui/react";
import { Button } from "./button";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#FF3c00",
    },
  },

//   FDC62E
  styles: {
    global: () => ({
      body: {
        bg: useColorModeValue("#F0EFEB", "#191825"),
        color: useColorModeValue("#282425", "white"),
      },
    }),
  },
  components: {
    Button,
  }
});
