import { useState } from "react";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import SwitchThemeButton from "./SwitchThemeButton";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [display, changeDisplay] = useState("none");

  return (
    <>
    <Flex
      h="90px"
      bg="#ABCCDD"
      justify="space-between"
      align="center"
      px={5}
      flexDirection={{ base: "column", md: "row" }}
      borderBottom='5px solid black'
    >
      <Text fontSize="4xl" fontWeight={700} >
        Da-Jiun Lin
      </Text>

      <Flex top="1rem" right="1rem" align="center">
        {/* Desktop */}
        <Flex display={{ base: "none", md: "flex" }}>


        <Link href="/" passHref>
            <Button   bg='white'   boxShadow="4px 4px " border='3px solid black' borderRadius='lg' aria-label="Home" my={5} mr={2}>
              首頁
            </Button>
          </Link>



          <Link href="projects" passHref>
            <Button  bg='white'   boxShadow="4px 4px " border='3px solid black' borderRadius='lg' aria-label="Home" my={5} mr={2}>
              作品集
            </Button>
          </Link>

          <Link href="/about" passHref>
            <Button  bg='white'  boxShadow="4px 4px " border='3px solid black'  variant="ghost" aria-label="About" my={5} mr={2}>
              關於我
            </Button>
          </Link>



          <Link href="/contact" passHref>
            <Button  bg='white'   boxShadow="4px 4px " border='3px solid black'  variant="ghost" aria-label="About" my={5} mr={2}>
              聯絡方式
            </Button>
          </Link>

          <SwitchThemeButton/>



        </Flex>
        </Flex>
        </Flex>
    </>
  );
};

export default Navbar