import { Flex, Text, Heading, SimpleGrid, Button, Card, CardBody, Image, Icon } from "@chakra-ui/react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { useColorModeValue } from "@chakra-ui/react";
import TypeEffect from "./TypeEffect";
import Link from "next/link";

const HomeItem = () => {
  const border = useColorModeValue("3px solid black", "3px solid white");
  const border2 = useColorModeValue("3px solid black", "3px solid black");
  const bg = useColorModeValue("gray.50", "#e4ff74");
  const iconBg = useColorModeValue("black", "black");
  const hoverBg = useColorModeValue("#E6FE72", "pink.400");
  const iconHoverBg = useColorModeValue("pink.400", "pink.400");
  const profileBg = useColorModeValue("#E1EEDD", "pink.200");

  return (
    <Flex fontSize={30} align="center" w="100%"  minH="75vh"  justify="center" p={5}  >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={8}>
        <Flex direction="column" justify="center"
        //  mt={{ base: "200px", md: 0 }}
         >
          <Wrap>
            <WrapItem>
              <Heading fontSize={{ base: "70px", md: "130px" }}> Hi </Heading>
            </WrapItem>
          </Wrap>
          <Heading fontSize="4xl" fontWeight={800} mb={6}>
            我是大鈞{" "}
          </Heading>
          <Flex fontWeight={800}>
            <TypeEffect />
          </Flex>
          <Flex>
            <Text mt="6" fontWeight="md" fontSize="xl">
              點選{" "}
              <Link href="/about">
                <Button w="20%" border={border} _hover={{ bg: hoverBg }}>
                  關於我
                </Button>
              </Link>
              或是{" "}
              <Link href="/projects">
                <Button w="20%" border={border}  _hover={{ bg: hoverBg }}>
                  作品集
                </Button>{" "}
              </Link>
              以了解更多
            </Text>
          </Flex>
        </Flex>

        <Card boxShadow="7px 7px " h="100%" border={border} bg={bg}>
          {/* window */}

          {/* body */}
          <CardBody>
            <Flex direction="column" bg={profileBg} color="#FFCB6B" border={border2} borderRadius="xl">
              <Flex justify="center">
                <Image src="/aboutme3.png" alt="" objectFit="contain" boxSize="250px" />
              </Flex>
            </Flex>

            <Flex justify="center" mt={4} gap={3}>
              <Link href="https://www.linkedin.com/in/da-jiun-lin-47a5841a1/">
                <Icon fontSize={40} as={AiFillLinkedin} cursor="pointer" color={iconBg} _hover={{color:iconHoverBg}} />
              </Link>
              <Link href="https://github.com/Lindahehexd">
                <Icon fontSize={40} as={AiFillGithub} cursor="pointer"  color={iconBg}  _hover={{color:iconHoverBg}}/>
              </Link>
            </Flex>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Flex>
  );
};

export default HomeItem;
