import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Text,
  Flex,
  Button,
  SimpleGrid,
  HStack,
  Heading,
  Box,
  Icon,
} from "@chakra-ui/react";
import { Tag, TagLabel, TagLeftIcon, TagRightIcon, TagCloseButton } from "@chakra-ui/react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <>
      <Flex align="center" direction="column" w="100%">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={8}>
          {/* <Card border="3px solid black" boxShadow="7px 7px " ml={5} h="100%">
            <Flex h="30%" bg="teal.300"></Flex>
            <CardBody>
              <Text fontSize="xl" fontWeight={600}>
                內容內容內容內容內容內容內容內容內容內容內容內容內容
              </Text>
            </CardBody>
            <Flex h="20%" bg="pink.300" align="center" justify="flex-end">
              <Button as="a" bg="white" border="4px solid black" borderRadius="lg" aria-label="Home" my={5} mr={2}>
                前往連結
              </Button>
              <Button as="a" bg="white" border="4px solid black" borderRadius="lg" aria-label="Home" my={5} mr={2}>
                查看內容
              </Button>
            </Flex>
          </Card> */}

          {/* 4 */}

          {/* <Card border="3px solid black" boxShadow="7px 7px " ml={5} h="100%">
            <Flex h="30%" bg="teal.300"></Flex>
            <CardBody>
              <Text fontSize="xl" fontWeight={600}>
                內容內容內容內容內容內容內容內容內容內容內容內容內容
              </Text>
            </CardBody>
            <Flex h="20%" bg="pink.300" align="center" justify="flex-end">
              <Button as="a" bg="white" border="4px solid black" borderRadius="lg" aria-label="Home" my={5} mr={2}>
                前往連結
              </Button>
              <Button as="a" bg="white" border="4px solid black" borderRadius="lg" aria-label="Home" my={5} mr={2}>
                查看內容
              </Button>
            </Flex>
          </Card> */}

          <Card border="3px solid black" boxShadow="7px 7px " bg="#ABCCDD" h="100%" maxW="600px">
            <Flex p={3} bg="#ABCCDD" borderBottom="5px solid black" justify="space-between">
              <Text fontSize="xl" fontWeight={800}>
                PROJECT 1
              </Text>

              <Flex>
                <Icon as={FaRegArrowAltCircleRight} fontSize={30} />
              </Flex>
            </Flex>
            {/* body */}
            <CardBody>
              <Box fontSize="4xl" fontWeight={800}>
                <HStack spacing={4} m={3}>
                  <Text>PTTit </Text>

                  <Tag p={2} boxShadow="4px 4px black" border="3px solid black" variant="solid" bg="teal.400">
                    Chakra UI
                  </Tag>

                  <Tag p={2} boxShadow="4px 4px black" border="3px solid black" variant="solid" bg="gray.800">
                    Next.js
                  </Tag>

                  <Tag p={2} boxShadow="4px 4px black" border="3px solid black" variant="solid" bg="blue.600">
                    Typescript
                  </Tag>

                  <Tag p={2} boxShadow="4px 4px black" border="3px solid black" variant="solid" bg="orange.500">
                    Firbase
                  </Tag>

                  <Tag p={2} boxShadow="4px 4px black" border="3px solid black" variant="solid" bg="purple.500">
                    Recoil
                  </Tag>
                </HStack>
              </Box>

              <Text fontSize="lg" fontWeight={700}>
                {" "}
                結合PPT與Reddit,
                使用者可以瀏覽看板、建立、加入、搜尋看板。並且可以發文、推文、噓文...等等。如果您是板主，甚至能客製化您的看板，包含圖片、看板簡介、看板標題。用戶也可對貼文點選喜歡或不喜歡，票數會即時顯示。此作品主要練習SSR、Type型別熟悉、使用狀態管理工具Recoil、擴展運算子、使用firebase達成CRUD...等等{" "}
              </Text>
              {/* <Image src="/aboutme3.png" alt="" objectFit="contain" boxSize="250px" /> */}
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

          <Card border="3px solid black" boxShadow="7px 7px " bg="#F4724E" h="100%" maxW="600px">
            <Flex p={3} borderBottom="5px solid black" justify="space-between">
              <Text fontSize="xl" fontWeight={800}>
                PROJECT 2
              </Text>

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

              <Text fontSize="lg" fontWeight={700}>
                聊天Go是一個任何人都可進入的公共聊天室，在聊天室中，您可以看到發訊息者的留言時間， 也能看到發訊息者的頭像。本作品主要練習使用firebase以及使用firebase提供的身份驗證方式進行登入。並練習使用Conditional Rendering去渲染明亮模式/黑暗模式的顏色、以及有登入的用戶才可看到聊天室，
              </Text>
              {/* <Image src="/aboutme3.png" alt="" objectFit="contain" boxSize="250px" /> */}
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

          <Card border="3px solid black" boxShadow="7px 7px " bg="#ABCCDD" h="100%" maxW="600px">
            <Flex p={3} bg="#ABCCDD" borderBottom="5px solid black" justify="space-between">
              <Text fontSize="xl" fontWeight={800}>
                PROJECT 3
              </Text>

              <Flex>
                <Icon as={FaRegArrowAltCircleRight} fontSize={30} />
              </Flex>
            </Flex>
            {/* body */}
            <CardBody>
              <Box fontSize="4xl" fontWeight={800}>
                <HStack spacing={4} m={3}>
                  <Text>Coin Tracker </Text>

                  <Tag p={2} boxShadow="4px 4px black" border="3px solid black" variant="solid" bg="teal.400">
                    Chakra UI
                  </Tag>

                  <Tag p={2} boxShadow="4px 4px black" border="3px solid black" variant="solid" bg="blue.600">
                    React
                  </Tag>
                </HStack>
              </Box>

              <Text fontSize="lg" fontWeight={700}>
                這是一個虛擬貨幣的即時百大排行榜，可以看到當前貨幣的最新資訊，包含名稱、價格、交易量，等等。本作品主要練習抓取API資料，並練習使用chart.js來呈現圖表。同時也練習react-router，熟悉跳頁方式的使用。另外也嘗試在撈資料時做Skeleton,提升使用者體驗
              </Text>
              {/* <Image src="/aboutme3.png" alt="" objectFit="contain" boxSize="250px" /> */}
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



          <Card border="3px solid black" boxShadow="7px 7px "  bg="#F4724E" h="100%" maxW="600px">
            <Flex p={3}  borderBottom="5px solid black" justify="space-between">
              <Text fontSize="xl" fontWeight={800}>
                PROJECT 4
              </Text>

              <Flex>
                <Icon as={FaRegArrowAltCircleRight} fontSize={30} />
              </Flex>
            </Flex>
            {/* body */}
            <CardBody>
              <Box fontSize="4xl" fontWeight={800}>
                <HStack spacing={4} m={3}>
                  <Text>Todo List </Text>

                  <Tag p={2} boxShadow="4px 4px black" border="3px solid black" variant="solid" bg="teal.400">
                    Chakra UI
                  </Tag>

                  <Tag p={2} boxShadow="4px 4px black" border="3px solid black" variant="solid" bg="blue.600">
                    React
                  </Tag>
                </HStack>
              </Box>

              <Text fontSize="lg" fontWeight={700}>
                此作品能讓使用者新增代辦事項及刪除完成事項，主要練習React,也同時熟悉Chakra UI的使用方式，並使用Local Storage將資料存在本地空間。
              </Text>
              {/* <Image src="/aboutme3.png" alt="" objectFit="contain" boxSize="250px" /> */}
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





          <Card border="3px solid black" boxShadow="7px 7px "bg="#ABCCDD" h="100%" maxW="600px"  >
            <Flex p={3} borderBottom="5px solid black" justify="space-between">
              <Text fontSize="xl" fontWeight={800}>
                PROJECT 5
              </Text>

              <Flex>
                <Icon as={FaRegArrowAltCircleRight} fontSize={30} />
              </Flex>
            </Flex>
            {/* body */}
            <CardBody>
              <Box fontSize="4xl" fontWeight={800}>
                <HStack spacing={4} m={3}>
                  <Text>碳帶紙捲計算器 </Text>

                  <Tag p={2} boxShadow="4px 4px black" border="3px solid black" variant="solid" bg="teal.400">
                    CSS
                  </Tag>

                  <Tag p={2} boxShadow="4px 4px black" border="3px solid black" variant="solid" bg="blue.600">
                    React
                  </Tag>
                </HStack>


                <Text fontSize="lg" fontWeight={700}>
                此作品是因應上一份公司的產品需求所開發的小應用程式，可以透過現有標籤紙捲/碳帶來了解該耗材可印刷的總長度及印刷張數，本作品主要練習基本的css以及react的prop傳遞。
              </Text>
              </Box>

              <Text fontSize="lg" fontWeight={700}></Text>
              {/* <Image src="/aboutme3.png" alt="" objectFit="contain" boxSize="250px" /> */}
            </CardBody>

            <Flex justify="center" gap={6}>
              <Button boxShadow="4px 4px " bg="gray.100" border="3px solid black" borderRadius="lg" my={5} mr={2} >
                查看內容
              </Button>
              <Button boxShadow="4px 4px " bg="gray.100" border="3px solid black" borderRadius="lg" my={5} mr={2}>
                前往連結
              </Button>
            </Flex>
          </Card>
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default ProjectCard;
