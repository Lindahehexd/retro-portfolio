import {
  Card,
  Text,
  Flex,
  Button,
  Image,
  Box,
  Heading,
  HStack,
  SimpleGrid,
  useColorModeValue,
  Tag,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const AboutMeBox = () => {
  const border = useColorModeValue("3px solid black", "3px solid white");
  const bg = useColorModeValue("#E4FF74", "pink.400");
  const color = useColorModeValue("gray.900", "gray.900");
  const boxShadow = useColorModeValue("4px 4px black", "4px 4px white");
  const hoverBg = useColorModeValue("#c4ed0e", "pink.200");

  const handleDownload = () => {
    const url = "./resume_2023.pdf";
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Da-Jiun_Lin_Resume.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <HStack mt={{ base: "none", md: "7", lg: "9" }}>
        <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} templateColumns={["1fr", "1fr", "37% 1fr"]} gap={4} mt={4}>
          <Box borderRadius="md" p={2}>
            {/* Content of the first component */}
            <Card
              boxShadow={useColorModeValue("8px  8px black", "8px 8px   white")}
              bg={useColorModeValue("#FCE2FF", "#d9f1c6")}
              border={border}
              h="400px"
              justify="center"
              align="center"
              mt={{ base: 1, md: 8 }}
              mr={{ base: "none", md: 8 }}
            >
              <Image src="/aboutme4.png" alt="" objectFit="contain" boxSize="250px" />
            </Card>
            <Flex justify="center" mt={5}>
              <Button
                onClick={handleDownload}
                boxShadow={boxShadow}
                bg={bg}
                border={border}
                color={useColorModeValue("black", "white")}
                _hover={{ bg: hoverBg }}
                mt={{ base: 2, md: 8 }}
                w="40%"
                fontSize="xl"
              >
                下載履歷
              </Button>
            </Flex>
          </Box>

          <Flex p={2} direction="column">
            <Flex>
              <Heading size="xl">關於我</Heading>
            </Flex>
            <Text my={3} fontSize="lg" fontWeight={600}>
              我叫大鈞，26歲，喜歡自學前端新知的技術文件工程師，專長在於將事物深入淺出，讓工程師或使用者都能快速上手產品。
              同時，我享受學習也享受解決問題，並且將其化為我的成就感。
              <Text fontSize="lg" fontWeight={600}>
                此個人網站主要展示前端相關作品，如果你想了解我的文件風格，歡迎至我的
                <Link href="https://dajiun-portfolio.netlify.app" target="_blank">
                  <Tag
                    _hover={{ bg: hoverBg }}
                    bg={bg}
                    fontSize="lg"
                    fontWeight={600}
                    color={useColorModeValue("black", "white")}
                    boxShadow={boxShadow}
                    ml={1}
                    mr={2}
                    cursor="pointer"
                    border={border}
                  >
                    文件作品空間{" "}
                  </Tag>
                </Link>
                了解更多。{" "}
              </Text>
            </Text>
            <Heading size="xl"> 接觸到前端的瞬間</Heading>
            <br></br>
            <Text mb={3} fontSize="lg" fontWeight={600}>
              除了享受打字與撰寫文件的樂趣，我渴望解決更多問題。在職業生涯中，我希望持續學習新知識，而前端領域可以讓我結合自己的興趣和專業背景，
              所以在職中便開始自學。
              <Text mt={3}>
                在一次因緣際會下，我為公司寫個一個小的應用程式。雖然在當時不是我的本業，但這小作品卻帶給我無比的成就感。
                我更加確定我很享受獲得成就感、挑戰且不斷學習的感覺。並且能持續感受到自己正不斷地進步、變強。我也希望未來能寫出一些讓大家都看得懂的技術新知，讓所有想學習的人都能快速上手。
              </Text>
            </Text>

            <Heading size="xl" mb={3}>
              {" "}
              技能{" "}
            </Heading>

            <SimpleGrid columns={{ sm: 3, md: 3, lg: 3 }} gap={3} mt={3} fontSize="lg" fontWeight={600}>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg" _hover={{ bg: bg }}>
                Next.js{" "}
              </Flex>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg" _hover={{ bg: bg }}>
                React{" "}
              </Flex>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg" _hover={{ bg: bg }}>
                Typescript
              </Flex>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg" _hover={{ bg: bg }}>
                Firebase
              </Flex>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg" _hover={{ bg: bg }}>
                Recoil{" "}
              </Flex>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg" _hover={{ bg: bg }}>
                Git{" "}
              </Flex>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg" _hover={{ bg: bg }}>
                Chakra UI{" "}
              </Flex>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg" _hover={{ bg: bg }}>
                Tailwind CSS{" "}
              </Flex>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg" _hover={{ bg: bg }}>
                Javascript
              </Flex>
            </SimpleGrid>
          </Flex>
        </SimpleGrid>
      </HStack>
    </>
  );
};

export default AboutMeBox;
