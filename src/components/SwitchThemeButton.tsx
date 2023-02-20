import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { IconButton, Switch, useColorMode } from "@chakra-ui/react";

const SwitchThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <IconButton icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />} isRound={true} size="md" alignSelf="center" onClick={toggleColorMode} aria-label="Toggle color mode" />
    </>
  );
};

export default SwitchThemeButton;
