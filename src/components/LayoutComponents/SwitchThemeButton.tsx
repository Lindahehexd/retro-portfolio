import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsSunFill } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";

const SwitchThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = useColorModeValue("gray.800", "white");
  return (
    <IconButton
      aria-label="Switch color mode"
      icon={colorMode === "dark" ? <BsSunFill /> : <IoMdMoon />}
      onClick={toggleColorMode}
      color={iconColor}
      variant="ghost"
    />
  );
};

export default SwitchThemeButton;
