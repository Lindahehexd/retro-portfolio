import { useState } from "react";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Link from "next/link";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");

  return (
    <>
    <Flex
      h="80px"
      bg="#EF9995"
      justify="space-between"
      align="center"
      px={5}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Text fontSize="4xl" fontWeight={700} boxShadow="4px 4px white">
        Da-Jiun Lin
      </Text>

      <Flex top="1rem" right="1rem" align="center">
        {/* Desktop */}
        <Flex display={{ base: "none", md: "flex" }}>


        <Link href="/" passHref>
            <Button as="a"  bg='white'   boxShadow="4px 4px " border='3px solid black' borderRadius='lg' aria-label="Home" my={5} mr={2}>
              首頁
            </Button>
          </Link>



          <Link href="projects" passHref>
            <Button as="a"  bg='white'   boxShadow="4px 4px " border='3px solid black' borderRadius='lg' aria-label="Home" my={5} mr={2}>
              作品集
            </Button>
          </Link>

          <Link href="/about" passHref>
            <Button as="a"  bg='white'  boxShadow="4px 4px " border='3px solid black'  variant="ghost" aria-label="About" my={5} mr={2}>
              關於我
            </Button>
          </Link>


          <Link href="/timeline" passHref>
            <Button as="a"  bg='white'   boxShadow="4px 4px " border='3px solid black'  variant="ghost" aria-label="About" my={5} mr={2}>
              經歷
            </Button>
          </Link>


          <Link href="/contact" passHref>
            <Button as="a"  bg='white'   boxShadow="4px 4px " border='3px solid black'  variant="ghost" aria-label="About" my={5} mr={2}>
              聯絡方式
            </Button>
          </Link>



        </Flex>
        </Flex>
        </Flex>
    </>
  );
};

export default Navbar