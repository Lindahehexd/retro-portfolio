import { Icon, Switch, useColorMode } from "@chakra-ui/react";
import { GiSun } from 'react-icons/gi'

const SwitchThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Icon as={GiSun} fontSize='lg' alignSelf="center" onClick={toggleColorMode} aria-label="Toggle color mode" />
    </>
  );
};

export default SwitchThemeButton;
