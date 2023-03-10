import { Card, CardBody, Text, Flex, Button, SimpleGrid, Icon, useColorModeValue, Box } from "@chakra-ui/react";
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
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={8} p={1}>
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
                <SimpleGrid columns={{ base: 3, md: 3, lg: 5 }} spacing={2} mb={5}>
                  <Flex
                    h="22px"
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
                    h="22px"
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
                    h="22px"
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
                    h="22px"
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
                    h="22px"
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

              <Text fontSize="lg" fontWeight={600}>
                {" "}
                ??????PTT???Reddit,
                ???????????????????????????????????????????????????????????????????????????????????????????????????...?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????SSR???Type???????????????????????????????????????Recoil???????????????????????????firebase??????CRUD...?????????{" "}
              </Text>
              {/* <Image src="/aboutme3.png" alt="" objectFit="contain" boxSize="250px" /> */}
            </CardBody>

            <Flex justify="center" gap={6}>
              {/* <Button >????????????</Button> */}
              <Link href="https://pttit.vercel.app/" target="_blank">
                <Button bg={btnbg} _hover={{ bg: hoverBg }}>
                  ????????????
                </Button>
              </Link>
              <Link href="https://github.com/Lindahehexd/Pttit" target="_blank">
                <Button fontSize="lg" bg={btnbg} _hover={{ bg: hoverBg }}>
                  <Icon fontSize={30} as={AiFillGithub}></Icon>
                  Github
                </Button>
              </Link>
            </Flex>
          </Card>

          <Card bg={cardBg2} h="100%" maxW="600px" color={color} border={border} boxShadow={boxShadow}>
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
                  ??????GO
                </Text>
                <SimpleGrid columns={{ base: 3, md: 3, lg: 5 }} spacing={2} mb={5}>
                  <Flex
                    h="22px"
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
                    h="22px"
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
                    h="22px"
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

              <Text fontSize="lg" fontWeight={600}>
                ??????Go??????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                ???????????????????????????????????????????????????????????????firebase????????????firebase?????????????????????????????????????????????????????????Conditional
                Rendering?????????????????????/????????????????????????????????????????????????????????????????????????
              </Text>
              {/* <Image src="/aboutme3.png" alt="" objectFit="contain" boxSize="250px" /> */}
            </CardBody>

            <Flex justify="center" gap={6} align="center">
              <Project1Modal />
              <Link href="https://chat-app-firebase-7rlx.vercel.app/" target="_blank">
                <Button bg={btnbg} _hover={{ bg: hoverBg }}>
                  ????????????
                </Button>
              </Link>
              <Link href="https://github.com/Lindahehexd/chat-app-firebase" target="_blank">
                <Button gap={1} fontSize="lg" bg={btnbg} _hover={{ bg: hoverBg }}>
                  <Icon fontSize={30} as={AiFillGithub}></Icon>
                  Github
                </Button>
              </Link>
            </Flex>
          </Card>

          <Card boxShadow={boxShadow} bg={cardBg1} h="100%" maxW="600px" color={color} border={border}>
            <Flex p={3} borderBottom="5px solid black" justify="space-between">
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
                  Shopping Cart
                </Text>
                <SimpleGrid columns={{ base: 3, md: 3, lg: 5 }} spacing={2} mb={5}>
                  <Flex
                    h="22px"
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
                    h="22px"
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
                    h="22px"
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
                    h="22px"
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
                    <Text>Redux</Text>
                  </Flex>
                </SimpleGrid>
              </Flex>

              <Text fontSize="lg" fontWeight={600}>
                {" "}
                ?????????????????????????????????????????????Next.js???Typescript????????????Redux-Toolkit???????????????????????????????????????Redux-Persist????????????????????????????????????????????????????????????????????????
              </Text>
              {/* <Image src="/aboutme3.png" alt="" objectFit="contain" boxSize="250px" /> */}
            </CardBody>

            <Flex justify="center" gap={6}>
              {/* <Button >????????????</Button> */}
              <Link href="https://next-chakra-shopping-cart.vercel.app/" target="_blank">
                <Button bg={btnbg} _hover={{ bg: hoverBg }}>
                  ????????????
                </Button>
              </Link>
              <Link href="https://github.com/Lindahehexd/next-chakra-shopping-cart" target="_blank">
                <Button fontSize="lg" bg={btnbg} _hover={{ bg: hoverBg }}>
                  <Icon fontSize={30} as={AiFillGithub}></Icon>
                  Github
                </Button>
              </Link>
            </Flex>
          </Card>

          <Card bg={cardBg2} h="100%" maxW="600px" color={color} border={border} boxShadow={boxShadow}>
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
                  Coin Tracker
                </Text>
                <SimpleGrid columns={{ base: 3, md: 3, lg: 5 }} spacing={2} mb={5}>
                  <Flex
                    h="22px"
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
                    h="22px"
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

              <Text fontSize="lg" fontWeight={600}>
                ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????API????????????????????????chart.js?????????????????????????????????react-router??????????????????????????????????????????????????????????????????Skeleton,????????????????????????
              </Text>
              {/* <Image src="/aboutme3.png" alt="" objectFit="contain" boxSize="250px" /> */}
            </CardBody>

            <Flex justify="center" gap={6}>
              {/* <Button>????????????</Button> */}
              <Link href="https://coin-app-one.vercel.app/" target="_blank">
                <Button bg={btnbg} _hover={{ bg: hoverBg }}>
                  ????????????
                </Button>
              </Link>
              <Link href="https://github.com/Lindahehexd/coin-app" target="_blank">
                <Button gap={1} fontSize="lg" bg={btnbg} _hover={{ bg: hoverBg }}>
                  <Icon fontSize={30} as={AiFillGithub}></Icon>
                  Github
                </Button>
              </Link>
            </Flex>
          </Card>

          <Card bg={cardBg1} h="100%" maxW="600px" color={color} border={border} boxShadow={boxShadow}>
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
                  Todo List
                </Text>
                <SimpleGrid columns={{ base: 3, md: 3, lg: 5 }} spacing={2} mb={5}>
                  <Flex
                    h="22px"
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
                    h="22px"
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

              <Text fontSize="lg" fontWeight={600}>
                ??????????????????????????????????????????????????????????????????????????????React,???????????????Chakra UI???????????????????????????Local
                Storage??????????????????????????????
              </Text>
              {/* <Image src="/aboutme3.png" alt="" objectFit="contain" boxSize="250px" /> */}
            </CardBody>

            <Flex justify="center" gap={6}>
              {/* <Button>????????????</Button> */}

              <Link href="https://todo-list-zeta-jade.vercel.app/" target="_blank">
                <Button bg={btnbg} _hover={{ bg: hoverBg }}>
                  ????????????
                </Button>
              </Link>

              <Link href="https://github.com/Lindahehexd/Todo-List---" target="_blank">
                <Button gap={1} fontSize="lg" bg={btnbg} _hover={{ bg: hoverBg }}>
                  <Icon fontSize={30} as={AiFillGithub}></Icon>
                  Github
                </Button>
              </Link>
            </Flex>
          </Card>

          <Card bg={cardBg2} h="100%" maxW="600px" color={color} border={border} boxShadow={boxShadow}>
            <Flex p={3} borderBottom="5px solid black" justify="space-between">
              <Text fontSize="xl" fontWeight={800}>
                PROJECT 6
              </Text>

              <Flex>
                <Icon as={FaRegArrowAltCircleRight} fontSize={30} />
              </Flex>
            </Flex>
            {/* body */}
            <CardBody>
              <Flex direction="column">
                <Text fontSize="4xl" fontWeight={800} mb={2}>
                  ?????????????????????
                </Text>
                <SimpleGrid columns={{ base: 3, md: 3, lg: 5 }} spacing={2} mb={5}>
                  <Flex
                    h="22px"
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
                    h="22px"
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

              <Text fontSize="lg" fontWeight={600}>
                ????????????????????????????????????????????????????????????????????????????????????????????????????????????/?????????????????????????????????????????????????????????????????????????????????????????????css??????react???prop?????????
              </Text>

              <Text fontSize="lg" fontWeight={600}></Text>
              {/* <Image src="/aboutme3.png" alt="" objectFit="contain" boxSize="250px" /> */}
            </CardBody>

            <Flex justify="center" gap={6}>
              {/* <Button>????????????</Button> */}
              <Link href="https://media-label-calculator.vercel.app/" target="_blank">
                <Button bg={btnbg} _hover={{ bg: hoverBg }}>
                  ????????????
                </Button>
              </Link>
              <Link href="https://github.com/Lindahehexd/Media-Label-Calculator" target="_blank">
                <Button gap={1} fontSize="lg" bg={btnbg} _hover={{ bg: hoverBg }}>
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
