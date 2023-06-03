import { Card, Text, Flex, VStack, Box, Icon, useColorModeValue } from "@chakra-ui/react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import Link from "next/link";

const handleSendMail = () => {
  window.location.href = `mailto:tkd09152129@gmail.com`;
};

const ContactCard = () => {
  const border = useColorModeValue("3px solid black", "3px solid white");
  const bg = useColorModeValue("gray.50", "#333333");
  const color = useColorModeValue("gray.900", "gray.900");
  const boxShadow = useColorModeValue("7px 7px black", "7px 7px");
  const hoverBg = useColorModeValue("pink.400", "pink.400");

  return (
    <>
      <VStack spacing={10} p={4}>
        <Text fontWeight={700} fontSize="xl">
          如果我有符合貴公司的條件的話，歡迎與我聯繫或聊聊，以下是我的資訊:{" "}
        </Text>
        <Flex w="100%" justify="center">
          <Card bg="gray.800" mb={6} w="100%" border={border} boxShadow={boxShadow}>
            <Box color="#FFCB6B" fontSize="xl" fontWeight={600} p={3}>
              <Text>
                <span style={{ color: "#A4CBB4" }}>import</span> <span style={{ color: "#89DCFE" }}>WebDeveloper</span>{" "}
                <span style={{ color: "#A4CBB4" }}>from</span> './components/WebDeveloper'
              </Text>
              <Text>
                <span style={{ color: "#89DCFE" }}>{"<WebDeveloper"}</span>
              </Text>
              <Text>
                <span style={{ color: "#EF9995" }}>{`name= `}</span>
                "林大鈞"
              </Text>
              <Text>
                <span style={{ color: "#EF9995" }}>{`email= `}</span>
                "tkd09152129@gmail.com"
              </Text>
              <Text>
                <span style={{ color: "#EF9995" }}>{`phone=  `}</span>
                "+886 0919390352"
              </Text>
              <Text>
                <span style={{ color: "#EF9995" }}>{`gitHub=  `}</span>
                "https://github.com/Lindahehexd"
              </Text>
              <Text>
                <span style={{ color: "#89DCFE" }}> {"/>"}</span>
              </Text>
            </Box>
            <Flex  bg="gray.50" align="center" justify="center" borderTop="5px solid black">
              <Text color={color} fontSize="xl" fontWeight={700}>
                聯絡方式
              </Text>
            </Flex>
          </Card>
        </Flex>

        {/* Content of the first component */}
        <Card
          border={border}
          boxShadow={boxShadow}
          justify="center"
          align="center"
          w="100%"
          direction="row"
          h="60px"
          gap={5}
          bg={bg}
        >
          <Link href="https://www.linkedin.com/in/da-jiun-l-47a5841a1/">
            <Icon fontSize={40} as={AiFillLinkedin} cursor="pointer" _hover={{color:hoverBg}} />
          </Link>
          <Link href="https://github.com/Lindahehexd">
            <Icon fontSize={40} as={AiFillGithub} cursor="pointer"  _hover={{color:hoverBg}}/>
          </Link>
          <Icon fontSize={35} as={SiGmail} onClick={handleSendMail} cursor="pointer" _hover={{color:hoverBg}} />
        </Card>
      </VStack>
    </>
  );
};

export default ContactCard;
