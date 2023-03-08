import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Collapse,
  VStack,
  HStack,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseFill } from "react-icons/ri";
import Link from "next/link";
import SwitchThemeButton from "./SwitchThemeButton";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);
  const border = useColorModeValue("3px solid black", "3px solid white");
  const iconBg = useColorModeValue("gray.50", "#333333");
  const boxShadow = useColorModeValue("4px 4px black", "4px 4px white");
  const borderBot = useColorModeValue("5px solid black", "5px solid white");
  const hoverBg = useColorModeValue("#E6FE72", "pink.400");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    // return a cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        p={4}
        h="90px"
        // bg='#ffca42'
        // bg='#E1EEDD'
        // bg='#E6FE72'
        // E5FF73
        justify="space-between"
        align="center"
        px={5}
        borderBottom={borderBot}
      >
        <Text fontSize="2xl" fontWeight="bold">
          Da-Jiun Lin
        </Text>
        {isMobile ? (
          <IconButton
            bg={iconBg}
            border={border}
            icon={isOpen ? <RiCloseFill /> : <RxHamburgerMenu />}
            onClick={onToggle}
            variant="ghost"
            aria-label="Mobile Menu"
          />
        ) : (
          <HStack spacing={4}>
            <Link href="/" passHref>
              <Button border={border} _hover={{ bg: hoverBg }}>
                首頁
              </Button>
            </Link>
            <Link href="projects">
              <Button border={border} _hover={{ bg: hoverBg }}>
                作品集
              </Button>
            </Link>
            <Link href="/about">
              <Button border={border} _hover={{ bg: hoverBg }}>
                關於我
              </Button>
            </Link>
            <Link href="/contact">
              <Button border={border} _hover={{ bg: hoverBg }}>
                聯絡方式
              </Button>
            </Link>
            <SwitchThemeButton />
          </HStack>
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box pb={4} mt={8} w="100vw" zIndex={20}>
          <VStack spacing={4} alignItems="center">
            <Link href="/">
              <Button border={border} boxShadow={boxShadow} _hover={{ bg: hoverBg }} w="30vh">
                首頁
              </Button>
            </Link>
            <Link href="projects">
              <Button border={border} boxShadow={boxShadow} _hover={{ bg: hoverBg }} w="30vh">
                作品集
              </Button>
            </Link>
            <Link href="/about">
              <Button border={border} boxShadow={boxShadow} _hover={{ bg: hoverBg }} w="30vh">
                關於我
              </Button>
            </Link>
            <Link href="/contact">
              <Button border={border} boxShadow={boxShadow} _hover={{ bg: hoverBg }} w="30vh">
                聯絡方式
              </Button>
            </Link>
            <Flex w='30vh' >

            <SwitchThemeButton />
            </Flex>
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
