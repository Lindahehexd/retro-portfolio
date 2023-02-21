import { Card, CardHeader, CardBody, CardFooter, Text, Flex, Button, Image, Box, Heading, Divider, Stack, HStack, SimpleGrid, Icon, Tag, Avatar } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Content from "./Content";

const AboutMeBox = () => {
  return (
    <>



<Flex align="center" direction="column" bg='pink' w='100%'>

<SimpleGrid columns={{ base: 1, md: 2}} spacing={10} mb={8}>

        <Card border="3px solid black" boxShadow="7px 7px " bg="orange.200" >
            {/* window */}
          <Flex bg="teal.300" justify="center">
            <Text fontSize="xl" fontWeight={600}>
              關於我
            </Text>
          </Flex>
          {/* body */}
          <CardBody>
            <Flex direction="column" bg="green.200" color="#FFCB6B" border="5px solid black" borderRadius="xl">
              <Flex justify='center'>
                <Image src="/aboutme3.png" alt="" objectFit="contain" boxSize="250px" />
              </Flex>
            </Flex>

            <Flex mt={3} align="center" justify="center">
              <Text fontWeight={800} fontSize="xl">
                @ 林大鈞{" "}
              </Text>
            </Flex>
            <Flex justify='center'>
            <Button as="a" bg="gray.50"  boxShadow="4px 4px " border="2px solid black" borderRadius="lg" aria-label="Home" my={5} mr={2}>
            下載履歷
          </Button>
            </Flex>
          </CardBody>
        </Card>


{/* card2 */}
        <Card  border="3px solid black" boxShadow="7px 7px " bg="orange.200">

{/* window */}
<Flex bg="teal.300" justify="center">
            <Text fontSize="xl" fontWeight={600}>
              關於我
            </Text>



          </Flex>
     <CardBody>

      <Flex fontWeight={700} p={4} direction="column">
        {/* 1 */}
        <Text mb={3}>我叫大鈞，26歲，曾是技術文件工程師，專長在於將事物以簡易的方式清楚表達，讓工程師或使用者都能快速上手產品。 同時，我享受學習也享受解決問題，並且將其化為我的成就感。</Text>
        {/* 2 */}
        <Text mb={3}>
          轉職的契機：自我實現占一大宗，希望能沿用自己的專長，讓自己除了有能力解決問題，也能自己開發功能。
          並且希望後續能以先前的專業，讓未來想朝這方向努力的人們，提供一個最友善且簡單明瞭的教學空間。
        </Text>
        {/* 3 */}
        <Text mb={3}>關於我的過去與成就，歡迎點擊我的舊網頁：　https://dajiun-portfolio.netlify.app</Text>
        <Button as="a" bg="green.200"  boxShadow="4px 4px " border="2px solid black" borderRadius="lg" aria-label="Home" my={5} mr={2}>
            舊網頁
          </Button>
      </Flex>

      </CardBody>
      </Card>



      <Card border="3px solid black" boxShadow="7px 7px" h="100%" maxW="600px">
            <Flex p={3} borderBottom="5px solid black" justify="space-between">
              <Text fontSize="xl" fontWeight={800}>
                PROJECT 2
              </Text>





              <Flex justify='center'  borderRadius="full" border="5px solid black">
                <Avatar src="/aboutme3.png"  objectFit="cover" boxSize="250px" bg='#ABCCDD' />
              </Flex>



              <Flex>
                <Icon as={FaRegArrowAltCircleRight} fontSize={30} />
              </Flex>
            </Flex>
            {/* body */}
            <CardBody>
              <Box fontSize="4xl" fontWeight={800}>
                <HStack spacing={4} m={3}>
                  <Text>聊天GO </Text>

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

             {/* 1 */}
        <Text mb={3}>我叫大鈞，26歲，曾是技術文件工程師，專長在於將事物以簡易的方式清楚表達，讓工程師或使用者都能快速上手產品。 同時，我享受學習也享受解決問題，並且將其化為我的成就感。</Text>
        {/* 2 */}
        <Text mb={3}>
          轉職的契機：自我實現占一大宗，希望能沿用自己的專長，讓自己除了有能力解決問題，也能自己開發功能。
          並且希望後續能以先前的專業，讓未來想朝這方向努力的人們，提供一個最友善且簡單明瞭的教學空間。
        </Text>
        {/* 3 */}
        <Text mb={3}>關於我的過去與成就，歡迎點擊我的舊網頁：　https://dajiun-portfolio.netlify.app</Text>
        <Button as="a" bg="green.200"  boxShadow="4px 4px " border="2px solid black" borderRadius="lg" aria-label="Home" my={5} mr={2}>
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
          </Card>





        {/* <Content/> */}
        </SimpleGrid>
      </Flex>



      



    </>
  );
};

export default AboutMeBox;
