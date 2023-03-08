import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsSunFill } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";

const SwitchThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const border = useColorModeValue("3px solid black", "3px solid white");
  const bg = useColorModeValue("gray.50", "gray.50");
  const color = useColorModeValue("gray.900", "gray.900");
  const boxShadow = useColorModeValue("7px 7px black", "7px 7px  #E4FF74");
  const hoverBg = useColorModeValue("#E6FE72", "pink.400");

  return (
    <IconButton
      w="100%"
      _hover={{ bg: hoverBg }}
      aria-label="Switch color mode"
      icon={colorMode === "dark" ? <BsSunFill /> : <IoMdMoon />}
      onClick={toggleColorMode}
      border={border}
    />
  );
};

export default SwitchThemeButton;
