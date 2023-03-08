import { Card, CardBody, Text, Flex, Button, SimpleGrid, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import Project1Modal from "../Modal/Project1Modal";

const ProjectCard = () => {
  const border = useColorModeValue("3px solid black", "3px solid white");
  const color = useColorModeValue("gray.900", "gray.900");
  const boxShadow = useColorModeValue("7px 7px black", "7px 7px white");
  const btnbg = useColorModeValue("gray.50", "gray.50");
  const hoverBg = useColorModeValue("#E6FE72", "#E6FE72");
  const cardBg1 = useColorModeValue("#E1EEDD", "purple.100");
  const cardBg2 = useColorModeValue("purple.100", "#E1EEDD");
//   ABCCDD

  return (
    <>
      <Flex align="center" direction="column" w="100%">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={8}>
          <Card boxShadow={boxShadow} bg={cardBg1} h="100%" maxW="600px" color={color} border={border}>
            <Flex p={3} borderBottom="5px solid black" justify="space-between">
              <Text fontSize="xl" fontWeight={800}>
                PROJECT 1
              </Text>

              <Flex>
                <Icon as={FaRegArrowAltCircleRight} fontSize={30} />
              </Flex>
            </Flex>
            {/* body */}
            <CardBody>
              <Flex direction="column">
                <Text fontSize="4xl" fontWeight={800} mb={2}>
                  PTTit{" "}
                </Text>
                <SimpleGrid columns={{ base: 3, md: 3, lg: 5 }} spacing={2}>
                  <Flex
                    h="50%"
                    p={2}
                    boxShadow="4px 4px black"
                    border="3px solid black"
                    borderRadius="md"
                    color="white"
                    fontSize="xs"
                    bg="teal.400"
                    justify="center"
                    align="center"
                    fontWeight={600}
                  >
                    <Text>Chakra UI</Text>
                  </Flex>

                  <Flex
                    h="50%"
                    p={2}
                    boxShadow="4px 4px black"
                    border="3px solid black"
                    borderRadius="md"
                    color="white"
                    fontSize="xs"
                    bg="gray.800"
                    justify="center"
                    align="center"
                    fontWeight={600}
                  >
                    <Text>Next.js</Text>
                  </Flex>

                  <Flex
                    h="50%"
                    p={2}
                    boxShadow="4px 4px black"
                    border="3px solid black"
                    borderRadius="md"
                    color="white"
                    fontSize="xs"
                    bg="blue.600"
                    justify="center"
                    align="center"
                    fontWeight={600}
                  >
                    <Text>Typescript</Text>
                  </Flex>

                  <Flex
                    h="50%"
                    p={2}
                    boxShadow="4px 4px black"
                    border="3px solid black"
                    borderRadius="md"
                    color="white"
                    fontSize="xs"
                    bg="orange.500"
                    justify="center"
                    align="center"
                    fontWeight={600}
                  >
                    <Text>Firebase</Text>
                  </Flex>

                  <Flex
                    h="50%"
                    p={2}
                    boxShadow="4px 4px black"
                    border="3px solid black"
                    borderRadius="md"
                    color="white"
                    fontSize="xs"
                    bg="purple.500"
                    justify="center"
                    align="center"
                    fontWeight={600}
                  >
                    <Text>Recoil</Text>
                  </Flex>
                </SimpleGrid>
              </Flex>

              <Text fontSize="lg" fontWeight={700}>
                {" "}
                結合PPT與Reddit,
                使用者可以瀏覽看板、建立、加入、搜尋看板。並且可以發文、推文、噓文...等等。如果您是板主，甚至能客製化您的看板，包含圖片、看板簡介、看板標題。用戶也可對貼文點選喜歡或不喜歡，票數會即時顯示。此作品主要練習SSR、Type型別熟悉、使用狀態管理工具Recoil、擴展運算子、使用firebase達成CRUD...等等{" "}
              </Text>
              {/* <Image src="/aboutme3.png" alt="" objectFit="contain" boxSize="250px" /> */}
            </CardBody>

            <Flex justify="center" gap={6}>
              {/* <Button >查看內容</Button> */}
              <Link href="https://pttit.vercel.app/">
                <Button bg={btnbg} _hover={{bg:hoverBg}}>前往連結</Button>
              </Link>
              <Link href="https://github.com/Lindahehexd/Pttit">
                <Button fontSize="lg" bg={btnbg} _hover={{bg:hoverBg}} >
                  <Icon fontSize={30} as={AiFillGithub}></Icon>
                  Github
                </Button>
              </Link>
            </Flex>
          </Card>

          <Card  bg={cardBg2} h="100%" maxW="600px" color={color} border={border} boxShadow={boxShadow}>
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
              <Flex direction="column">
                <Text fontSize="4xl" fontWeight={800} mb={2}>
                  聊天GO
                </Text>
                <SimpleGrid columns={{ base: 3, md: 3, lg: 5 }} spacing={2}>
                  <Flex
                    h="50%"
                    p={2}
                    boxShadow="4px 4px black"
                    border="3px solid black"
                    borderRadius="md"
                    color="white"
                    fontSize="xs"
                    bg="teal.400"
                    justify="center"
                    align="center"
                    fontWeight={600}
                  >
                    <Text>Chakra UI</Text>
                  </Flex>

                  <Flex
                    h="50%"
                    p={2}
                    boxShadow="4px 4px black"
                    border="3px solid black"
                    borderRadius="md"
                    color="white"
                    fontSize="xs"
                    bg="blue.600"
                    justify="center"
                    align="center"
                    fontWeight={600}
                  >
                    <Text>React</Text>
                  </Flex>

                  <Flex
                    h="50%"
                    p={2}
                    boxShadow="4px 4px black"
                    border="3px solid black"
                    borderRadius="md"
                    color="white"
                    fontSize="xs"
                    bg="orange.500"
                    justify="center"
                    align="center"
                    fontWeight={600}
                  >
                    <Text>Firebase</Text>
                  </Flex>
                </SimpleGrid>
              </Flex>

              <Text fontSize="lg" fontWeight={700}>
                聊天Go是一個任何人都可進入的公共聊天室，在聊天室中，您可以看到發訊息者的留言時間，
                也能看到發訊息者的頭像。本作品主要練習使用firebase以及使用firebase提供的身份驗證方式進行登入。並練習使用Conditional
                Rendering去渲染明亮模式/黑暗模式的顏色、以及有登入的用戶才可看到聊天室，
              </Text>
              {/* <Image src="/aboutme3.png" alt="" objectFit="contain" boxSize="250px" /> */}
            </CardBody>

            <Flex justify="center" gap={6} align="center">
              <Project1Modal />
              <Link href=" https://chat-app-firebase-7rlx.vercel.app/">
                <Button bg={btnbg} _hover={{bg:hoverBg}} >前往連結</Button>
              </Link>
              <Link href="https://github.com/Lindahehexd/chat-app-firebase">
                <Button gap={1} fontSize="lg" bg={btnbg} _hover={{bg:hoverBg}} >
                  <Icon fontSize={30} as={AiFillGithub}></Icon>
                  Github
                </Button>
              </Link>
            </Flex>
          </Card>

          <Card  bg={cardBg1} h="100%" maxW="600px" color={color} border={border} boxShadow={boxShadow}>
            <Flex p={3}  borderBottom="5px solid black" justify="space-between">
              <Text fontSize="xl" fontWeight={800}>
                PROJECT 3
              </Text>

              <Flex>
                <Icon as={FaRegArrowAltCircleRight} fontSize={30} />
              </Flex>
            </Flex>
            {/* body */}
            <CardBody>
              <Flex direction="column">
                <Text fontSize="4xl" fontWeight={800} mb={2}>
                  Coin Tracker
                </Text>
                <SimpleGrid columns={{ base: 3, md: 3, lg: 5 }} spacing={2}>
                  <Flex
                    h="50%"
                    p={2}
                    boxShadow="4px 4px black"
                    border="3px solid black"
                    borderRadius="md"
                    color="white"
                    fontSize="xs"
                    bg="teal.400"
                    justify="center"
                    align="center"
                    fontWeight={600}
                  >
                    <Text>Chakra UI</Text>
                  </Flex>

                  <Flex
                    h="50%"
                    p={2}
                    boxShadow="4px 4px black"
                    border="3px solid black"
                    borderRadius="md"
                    color="white"
                    fontSize="xs"
                    bg="blue.600"
                    justify="center"
                    align="center"
                    fontWeight={600}
                  >
                    <Text>React</Text>
                  </Flex>
                </SimpleGrid>
              </Flex>

              <Text fontSize="lg" fontWeight={700}>
                這是一個虛擬貨幣的即時百大排行榜，可以看到當前貨幣的最新資訊，包含名稱、價格、交易量，等等。本作品主要練習抓取API資料，並練習使用chart.js來呈現圖表。同時也練習react-router，熟悉跳頁方式的使用。另外也嘗試在撈資料時做Skeleton,提升使用者體驗
              </Text>
              {/* <Image src="/aboutme3.png" alt="" objectFit="contain" boxSize="250px" /> */}
            </CardBody>

            <Flex justify="center" gap={6}>
              {/* <Button>查看內容</Button> */}
              <Link href="https://coin-app-one.vercel.app/">
                <Button bg={btnbg} _hover={{bg:hoverBg}} >前往連結</Button>
              </Link>
              <Link href=" https://github.com/Lindahehexd/coin-app">
                <Button gap={1} fontSize="lg" bg={btnbg} _hover={{bg:hoverBg}} >
                  <Icon fontSize={30} as={AiFillGithub}></Icon>
                  Github
                </Button>
              </Link>
            </Flex>
          </Card>

          <Card  bg={cardBg2} h="100%" maxW="600px" color={color} border={border} boxShadow={boxShadow}>
            <Flex p={3} borderBottom="5px solid black" justify="space-between">
              <Text fontSize="xl" fontWeight={800}>
                PROJECT 4
              </Text>

              <Flex>
                <Icon as={FaRegArrowAltCircleRight} fontSize={30} />
              </Flex>
            </Flex>
            {/* body */}
            <CardBody>
              <Flex direction="column">
                <Text fontSize="4xl" fontWeight={800} mb={2}>
                  Todo List
                </Text>
                <SimpleGrid columns={{ base: 3, md: 3, lg: 5 }} spacing={2}>
                  <Flex
                    h="50%"
                    p={2}
                    boxShadow="4px 4px black"
                    border="3px solid black"
                    borderRadius="md"
                    color="white"
                    fontSize="xs"
                    bg="teal.400"
                    justify="center"
                    align="center"
                    fontWeight={600}
                  >
                    <Text>Chakra UI</Text>
                  </Flex>

                  <Flex
                    h="50%"
                    p={2}
                    boxShadow="4px 4px black"
                    border="3px solid black"
                    borderRadius="md"
                    color="white"
                    fontSize="xs"
                    bg="blue.600"
                    justify="center"
                    align="center"
                    fontWeight={600}
                  >
                    <Text>React</Text>
                  </Flex>
                </SimpleGrid>
              </Flex>

              <Text fontSize="lg" fontWeight={700}>
                此作品能讓使用者新增代辦事項及刪除完成事項，主要練習React,也同時熟悉Chakra UI的使用方式，並使用Local
                Storage將資料存在本地空間。
              </Text>
              {/* <Image src="/aboutme3.png" alt="" objectFit="contain" boxSize="250px" /> */}
            </CardBody>

            <Flex justify="center" gap={6}>
              {/* <Button>查看內容</Button> */}

              <Link href="https://todo-list-zeta-jade.vercel.app/">
                <Button bg={btnbg} _hover={{bg:hoverBg}} >前往連結</Button>
              </Link>

              <Link href=" https://github.com/Lindahehexd/Todo-List---">
                <Button gap={1} fontSize="lg" bg={btnbg} _hover={{bg:hoverBg}} >
                  <Icon fontSize={30} as={AiFillGithub} ></Icon>
                  Github
                </Button>
              </Link>
            </Flex>
          </Card>

          <Card  bg={cardBg1} h="100%" maxW="600px" color={color} border={border} boxShadow={boxShadow}>
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
              <Flex direction="column">
                <Text fontSize="4xl" fontWeight={800} mb={2}>
                  碳帶紙捲計算器
                </Text>
                <SimpleGrid columns={{ base: 3, md: 3, lg: 5 }} spacing={2}>
                  <Flex
                    h="50%"
                    p={2}
                    boxShadow="4px 4px black"
                    border="3px solid black"
                    borderRadius="md"
                    color="white"
                    fontSize="xs"
                    bg="teal.400"
                    justify="center"
                    align="center"
                    fontWeight={600}
                  >
                    <Text>CSS</Text>
                  </Flex>

                  <Flex
                    h="50%"
                    p={2}
                    boxShadow="4px 4px black"
                    border="3px solid black"
                    borderRadius="md"
                    color="white"
                    fontSize="xs"
                    bg="blue.600"
                    justify="center"
                    align="center"
                    fontWeight={600}
                  >
                    <Text>React</Text>
                  </Flex>
                </SimpleGrid>
              </Flex>

              <Text fontSize="lg" fontWeight={700}>
                此作品是因應上一份公司的產品需求所開發的小應用程式，可以透過現有標籤紙捲/碳帶來了解該耗材可印刷的總長度及印刷張數，本作品主要練習基本的css以及react的prop傳遞。
              </Text>

              <Text fontSize="lg" fontWeight={700}></Text>
              {/* <Image src="/aboutme3.png" alt="" objectFit="contain" boxSize="250px" /> */}
            </CardBody>

            <Flex justify="center" gap={6}>
              {/* <Button>查看內容</Button> */}
              <Link href=" https://media-label-calculator.vercel.app/">
                <Button bg={btnbg} _hover={{bg:hoverBg}} >前往連結</Button>
              </Link>
              <Link href=" https://github.com/Lindahehexd/Media-Label-Calculator">
                <Button gap={1} fontSize="lg" bg={btnbg} _hover={{bg:hoverBg}} >
                  <Icon fontSize={30} as={AiFillGithub}></Icon>
                  Github
                </Button>
              </Link>
            </Flex>
          </Card>
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default ProjectCard;
