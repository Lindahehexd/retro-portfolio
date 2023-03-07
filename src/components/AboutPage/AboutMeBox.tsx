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
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

const AboutMeBox = () => {
  const border = useColorModeValue("3px solid black", "3px solid white");
  const bg = useColorModeValue("gray.50", "gray.50");
  const color = useColorModeValue("gray.900", "gray.900");
  const boxShadow = useColorModeValue("4px 4px black", "4px 4px white");

  const handleDownload = () => {
    const url = "./test.pdf.pdf";
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
        a.download = "resume.pdf";
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
          <Box borderRadius="md">
            {/* Content of the first component */}
            <Card
              boxShadow="7px 7px #E4FF74"
              bg="#FCE2FF"
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
                boxShadow="4px 4px #E4FF74 "
                bg="black"
                color="white"
                _hover={{ bg: "#E4FF74" }}
                border={border}
                mt={{ base: 2, md: 8 }}
                w="40%"
                fontSize="xl"
              >
                下載履歷
              </Button>
            </Flex>
          </Box>

          <Box fontSize="xl" fontWeight={600}>
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
              關於我的過去與成就，歡迎透過我以前的網頁了解更多{" "}
              <Link href="https://dajiun-portfolio.netlify.app/#portfolio">
                <Button p={2} boxShadow="4px 4px black" border="3px solid black" variant="solid"></Button>
              </Link>
            </Text>

            <Heading fontSize="5xl"> 技能 </Heading>

            <SimpleGrid columns={{ sm: 3, md: 3, lg: 3 }} gap={3} mt={3}>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg">
                React{" "}
              </Flex>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg">
                Typescript
              </Flex>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg">
                Firebase
              </Flex>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg">
                Recoil{" "}
              </Flex>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg">
                Chakra UI{" "}
              </Flex>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg">
                Tailwind CSS{" "}
              </Flex>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg">
                Javascript
              </Flex>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg">
                CSS{" "}
              </Flex>
              <Flex justify="center" border={border} boxShadow={boxShadow} borderRadius="lg">
                Html5{" "}
              </Flex>
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </HStack>
    </>
  );
};

export default AboutMeBox;
