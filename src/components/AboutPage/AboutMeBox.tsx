import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Flex,
  Button,
  Image,
  Box,
  Heading,
  Divider,
  Stack,
  HStack,
  SimpleGrid,
  Icon,
  Tag,
  Avatar,
  VStack,
} from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Content from "./Content";
import { Grid, GridItem } from "@chakra-ui/react";

import { TagLabel, TagLeftIcon, TagRightIcon, TagCloseButton } from "@chakra-ui/react";

const AboutMeBox = () => {
  return (
    <>
        <HStack  mt={{base:'none', md:'7',lg:'9'}}>
          <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} templateColumns={["1fr", "1fr", "37% 1fr"]} gap={4} mt={4}>
            <Box  borderRadius="md"  mr={8}>
              {/* Content of the first component */}
              <Card
                border="3px solid black"
                boxShadow="7px 7px "
                bg="#ABCCDD"
                h="400px"
                justify="center"
                align="center"
              >
                <Image src="/profile2.png" alt="" objectFit="contain" boxSize="250px" />
              </Card>
              <Flex justify="center" mt={5}>
                <Button boxShadow="4px 4px " bg="gray.100" border="3px solid black" mt={2} w="40%" fontSize="xl">
                  下載履歷
                </Button>
              </Flex>
            </Box>

            <Box fontSize="xl" color="black" fontWeight={600} >
              <Text fontSize="5xl">關於我</Text>
              <Text mb={3}>
                我叫大鈞，26歲，曾是技術文件工程師，專長在於將事物以簡易的方式清楚表達，讓工程師或使用者都能快速上手產品。
                同時，我享受學習也享受解決問題，並且將其化為我的成就感。
              </Text>
              <Text mb={3}>
                轉職的契機：自我實現占一大宗，希望能沿用自己的專長，讓自己除了有能力解決問題，也能自己開發功能。
                並且希望後續能以先前的專業，讓未來想朝這方向努力的人們，提供一個最友善且簡單明瞭的教學空間。
              </Text>
              <Text mb={3}>
                關於我的過去與成就，歡迎點擊我的舊網頁{" "}
                <Tag p={2} boxShadow="4px 4px black" border="3px solid black" variant="solid" bg="orange.500">
                  url
                </Tag>
              </Text>



              <Heading fontSize='5xl'> 技能 </Heading>


            <SimpleGrid columns={{ sm: 3, md: 3, lg: 3 }} gap={3} mt={3}  >
                <Flex bg='#F4724E' justify='center' border='3px solid black' boxShadow='4px 4px' borderRadius='lg'> React </Flex>
                <Flex bg='#ABCCDD' justify='center' border='3px solid black' boxShadow='4px 4px' borderRadius='lg'> Typescript</Flex>
                <Flex bg='#FDC62E' justify='center' border='3px solid black' boxShadow='4px 4px' borderRadius='lg'> Firebase</Flex>
                <Flex bg='#F4724E' justify='center' border='3px solid black' boxShadow='4px 4px' borderRadius='lg'> Recoil </Flex>
                <Flex bg='#ABCCDD' justify='center' border='3px solid black' boxShadow='4px 4px' borderRadius='lg'> Chakra UI </Flex>
                <Flex bg='#FDC62E' justify='center' border='3px solid black' boxShadow='4px 4px' borderRadius='lg'> Tailwind CSS </Flex>
                <Flex bg='#F4724E' justify='center' border='3px solid black' boxShadow='4px 4px' borderRadius='lg'> Javascript</Flex>
                <Flex bg='#ABCCDD' justify='center' border='3px solid black' boxShadow='4px 4px' borderRadius='lg'> CSS </Flex>
                <Flex bg='#FDC62E' justify='center' border='3px solid black' boxShadow='4px 4px' borderRadius='lg'> Html5  </Flex>
            </SimpleGrid>
        {/* <Tag colorScheme="cyan">
          <TagLabel>Html5</TagLabel>
        </Tag>
        <Tag colorScheme="cyan">
          <TagLabel>CSS</TagLabel>
        </Tag>
        <Tag colorScheme="cyan">
          <TagLabel>JavaScript</TagLabel>
        </Tag>
        <Tag colorScheme="cyan">
          <TagLabel>React</TagLabel>
        </Tag>
        <Tag colorScheme="cyan">
          <TagLabel>Typescript</TagLabel>
        </Tag>
        <Tag colorScheme="cyan">
          <TagLabel>Chakra UI</TagLabel>
        </Tag>
        <Tag colorScheme="cyan">
          <TagLabel>Tailwind CSS</TagLabel>
        </Tag>
        <Tag colorScheme="cyan">
          <TagLabel>Recoil</TagLabel>
        </Tag> */}






            </Box>
          </SimpleGrid>
        </HStack>



      {/* <Flex bg='teal'>
      <SimpleGrid columns={{ base: 1, md: 2 }}  spacing={5} mb={8} >
          <Card
            border="3px solid black"
            boxShadow="7px 7px "
            bg="blue.200"
            justify="center"
            align="center"
          >
            <Image src="/profile2.png" alt="" objectFit="contain" boxSize="250px" />
            <Flex mt={5} gap={9}>
            <Button boxShadow="4px 4px " border="2px solid black" borderRadius="lg" w="170px">
              舊網頁
            </Button>

            <Button boxShadow="4px 4px " border="2px solid black" borderRadius="lg" aria-label="Home" w="170px">
              舊網頁
            </Button>
          </Flex>
          </Card>

          <Flex justify='center'>
          <Box borderRadius='lg' p={3} >
            <Text fontSize="4xl" fontWeight={800}>
              關於我{" "}
            </Text>

            <Box fontSize="xl" color="black" fontWeight={600}>
              <Text mb={3}>
                我叫大鈞，26歲，曾是技術文件工程師，專長在於將事物以簡易的方式清楚表達，讓工程師或使用者都能快速上手產品。
                同時，我享受學習也享受解決問題，並且將其化為我的成就感。
              </Text>
              <Text mb={3}>
                轉職的契機：自我實現占一大宗，希望能沿用自己的專長，讓自己除了有能力解決問題，也能自己開發功能。
                並且希望後續能以先前的專業，讓未來想朝這方向努力的人們，提供一個最友善且簡單明瞭的教學空間。
              </Text>
              <Text mb={3}>
                關於我的過去與成就，歡迎點擊我的舊網頁{" "}
                <Tag p={2} boxShadow="4px 4px black" border="3px solid black" variant="solid" bg="orange.500">
                  url
                </Tag>
              </Text>
            </Box>
          </Box>
        </Flex> 
      </SimpleGrid>




        </Flex> */}

      {/* <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mb={8} bg='teal'>
        <Flex direction="column"  align="center" maxW="400px" justify='center'>
          <Card
            border="3px solid black"
            boxShadow="7px 7px "
            bg="blue.200"
            justify="center"
            align="center"
          >
            <Image src="/profile2.png" alt="" objectFit="contain" boxSize="250px" />
            <Flex mt={5} gap={9}>
            <Button boxShadow="4px 4px " border="2px solid black" borderRadius="lg" w="170px">
              舊網頁
            </Button>

            <Button boxShadow="4px 4px " border="2px solid black" borderRadius="lg" aria-label="Home" w="170px">
              舊網頁
            </Button>
          </Flex>
          </Card>

   
        </Flex>
      </SimpleGrid> */}

      {/* 
        <Flex bg='pink' justify='center'>
          <Box bg='gray.100' border='4px solid black' boxShadow='7px 7px' borderRadius='lg' p={3} >
            <Text fontSize="4xl" fontWeight={800}>
              關於我{" "}
            </Text>

            <Box fontSize="xl" color="black" fontWeight={600}>
              <Text mb={3}>
                我叫大鈞，26歲，曾是技術文件工程師，專長在於將事物以簡易的方式清楚表達，讓工程師或使用者都能快速上手產品。
                同時，我享受學習也享受解決問題，並且將其化為我的成就感。
              </Text>
              <Text mb={3}>
                轉職的契機：自我實現占一大宗，希望能沿用自己的專長，讓自己除了有能力解決問題，也能自己開發功能。
                並且希望後續能以先前的專業，讓未來想朝這方向努力的人們，提供一個最友善且簡單明瞭的教學空間。
              </Text>
              <Text mb={3}>
                關於我的過去與成就，歡迎點擊我的舊網頁{" "}
                <Tag p={2} boxShadow="4px 4px black" border="3px solid black" variant="solid" bg="orange.500">
                  url
                </Tag>
              </Text>
            </Box>
          </Box>
        </Flex> */}

      {/* <Card border="3px solid black" boxShadow="7px 7px" maxW="600px">
          <Flex p={3} borderBottom="5px solid black" justify="space-between">
            <Text fontSize="xl" fontWeight={800}>
              @林大鈞
            </Text>

            <Flex justify="center" borderRadius="full" border="5px solid black">
              <Avatar src="/profile2.png" objectFit="cover" boxSize="250px" bg="#ABCCDD" />
            </Flex>

            <Flex>
              <Icon as={FaRegArrowAltCircleRight} fontSize={30} />
            </Flex>
          </Flex>
          <CardBody>
            <Box fontSize="4xl" fontWeight={800}>
              <HStack spacing={4} m={3}>
                <Text>我的故事 </Text>

                <Tag p={2} boxShadow="4px 4px black" border="3px solid black" variant="solid" bg="teal.400">
                  Chakra UI
                </Tag>

                <Tag p={2} boxShadow="4px 4px black" border="3px solid black" variant="solid" bg="blue.600">
                  React
                </Tag>

                <Tag p={2} boxShadow="4px 4px black" border="3px solid black" variant="solid" bg="orange.500">
                  Firbase
                </Tag>
              </HStack>
            </Box>

            <Text mb={3}>
              我叫大鈞，26歲，曾是技術文件工程師，專長在於將事物以簡易的方式清楚表達，讓工程師或使用者都能快速上手產品。
              同時，我享受學習也享受解決問題，並且將其化為我的成就感。
            </Text>
            <Text mb={3}>
              轉職的契機：自我實現占一大宗，希望能沿用自己的專長，讓自己除了有能力解決問題，也能自己開發功能。
              並且希望後續能以先前的專業，讓未來想朝這方向努力的人們，提供一個最友善且簡單明瞭的教學空間。
            </Text>
            <Text mb={3}>關於我的過去與成就，歡迎點擊我的舊網頁：　https://dajiun-portfolio.netlify.app</Text>
            <Button
              as="a"
              bg="green.200"
              boxShadow="4px 4px "
              border="2px solid black"
              borderRadius="lg"
              aria-label="Home"
              my={5}
              mr={2}
            >
              舊網頁
            </Button>
          </CardBody>

          <Flex justify="center" gap={6}>
            <Button boxShadow="4px 4px " bg="gray.100" border="3px solid black" borderRadius="lg" my={5} mr={2}>
              查看內容
            </Button>
            <Button boxShadow="4px 4px " bg="gray.100" border="3px solid black" borderRadius="lg" my={5} mr={2}>
              前往連結
            </Button>
          </Flex>
        </Card> */}

      {/* <Content/> */}
    </>
  );
};

export default AboutMeBox;
