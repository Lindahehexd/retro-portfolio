import { Flex, VStack, Text, Heading, SimpleGrid, Box, Button, Card, CardBody, Image, Icon } from "@chakra-ui/react";
import TypeEffect from "./TypeEffect";
import { Highlight } from "@chakra-ui/react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { RoughNotation } from "react-rough-notation";
import { AiFillLinkedin, AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

interface AnnotatedTextProps {
  text: string;
  annotationType: string;
}

const Test = () => {
  return (
    <Flex fontSize={30} align="center" w="100%" h="80vh" justify="center" p={5}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={8}>
        <Flex direction="column" justify="center" mt={{ base: '100px', md: 0 }}>
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
          <Flex >
            <Text mt="6" fontWeight="md" fontSize='xl' >
            點選{" "}
              <Button
                w="20%"
                bg="gray.50"
                boxShadow="4px 4px "
                border="2px solid black"
                borderRadius="lg"
                my={5}
                mr={2}
              >
                關於我
              </Button>
              或是{" "}
              <Button
                w="20%"
                bg="gray.50"
                boxShadow="4px 4px "
                border="2px solid black"
                borderRadius="lg"
                my={5}
                mr={2}
              >
                作品集
              </Button>{" "}
              以了解更多
            </Text>
          </Flex>
{/* 
          <Flex>
            <Button w="20%" bg="gray.50" boxShadow="4px 4px " border="2px solid black" borderRadius="lg" my={5} mr={2}>
              關於我
            </Button>

            <Button w="20%" bg="gray.50" boxShadow="4px 4px " border="2px solid black" borderRadius="lg" my={5} mr={2}>
              作品集
            </Button>
          </Flex> */}
        </Flex>

        {/* //Card */}

        <Card border="3px solid black" boxShadow="7px 7px " h="100%">
          {/* window */}

          {/* body */}
          <CardBody>
            <Flex direction="column" bg="green.200" color="#FFCB6B" border="5px solid black" borderRadius="xl">
              <Flex justify="center">
                <Image src="/aboutme3.png" alt="" objectFit="contain" boxSize="250px" />
              </Flex>
            </Flex>

            <Flex justify="center" mt={4} gap={3}>
              {/* <Button
                as="a"
                bg="gray.50"
                boxShadow="4px 4px "
                border="2px solid black"
                borderRadius="lg"
                aria-label="Home"
                my={5}
                mr={2}
              >
              
              </Button> */}
              <Icon fontSize={40} as={AiFillLinkedin} />
          <Icon fontSize={40} as={AiFillFacebook} />
          <Icon fontSize={40} as={AiFillGithub} />
          <Icon fontSize={35} as={SiGmail} />
            </Flex>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Flex>
  );
};

export default Test;
