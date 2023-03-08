import { Card, Text, Flex, Button, Image, Box, Heading, HStack, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
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
              boxShadow={boxShadow}
              bg={useColorModeValue("#FCE2FF", "#e5ff73")}
              border={border}
              h="400px"
              justify="center"
              align="center"
              mt={{ base: 1, md: 8 }}
              mr={{ base: "none", md: 8 }}
            >
              <Image src="/profile2.png" alt="" objectFit="contain" boxSize="250px" />
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

          <Box fontSize="xl" fontWeight={600} p={2}>
            <Heading fontSize="5xl">關於我</Heading>
            <Text mb={3}>
              我叫大鈞，26歲，曾是技術文件工程師，專長在於將事物以簡易的方式清楚表達，讓工程師或使用者都能快速上手產品。
              同時，我享受學習也享受解決問題，並且將其化為我的成就感。
            </Text>
            <Text mb={3}>
              轉職的契機：自我實現占一大宗，希望能沿用自己的專長，讓自己除了有能力解決問題，也能自己開發功能。
              並且希望後續能以先前的專業，讓未來想朝這方向努力的人們，提供一個最友善且簡單明瞭的教學空間。
            </Text>
            <Text mb={3}>
              關於我的過去與成就，歡迎透過我以前的網頁了解更多{" "}
              <Link href="https://dajiun-portfolio.netlify.app/#portfolio" target="_blank">
                <Button
                  as={FaArrowRight}
                  p={2}
                  boxShadow={boxShadow}
                  border={border}
                  variant="solid"
                  _hover={{ bg: hoverBg }}
                  bg={bg}
                ></Button>
              </Link>
            </Text>

            <Heading fontSize="5xl"> 技能 </Heading>

            <SimpleGrid columns={{ sm: 3, md: 3, lg: 3 }} gap={3} mt={3}>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg" _hover={{bg:bg}}>
                Next.js{" "}
              </Flex>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg" _hover={{bg:bg}}>
                React{" "}
              </Flex>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg" _hover={{bg:bg}}>
                Typescript
              </Flex>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg" _hover={{bg:bg}}>
                Firebase
              </Flex>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg" _hover={{bg:bg}}>
                Recoil{" "}
              </Flex>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg" _hover={{bg:bg}}>
                Chakra UI{" "}
              </Flex>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg" _hover={{bg:bg}}>
                Tailwind CSS{" "}
              </Flex>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg" _hover={{bg:bg}}>
                Javascript
              </Flex>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg" _hover={{bg:bg}}>
                CSS{" "}
              </Flex>
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </HStack>
    </>
  );
};

export default AboutMeBox;
