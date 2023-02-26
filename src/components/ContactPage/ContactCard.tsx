import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Flex,
  Button,
  VStack,
  Box,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const ContactCard = () => {
  return (
    <>
      <VStack  spacing={10} p={2}>
        <Text fontWeight={700} fontSize="2xl">
          歡迎深入了解或簡單聊聊，或我有符合貴公司的條件的話，以下是我的資訊:{" "}
        </Text>
        <Flex  w='100%' justify='center'>
          <Card border="3px solid black" boxShadow="7px 7px " bg="gray.800" mb={6}  w='80%'>
              <Box color="#FFCB6B"  fontSize="xl" fontWeight={600} p={3} >
                <Text>
                  <span style={{ color: "#A4CBB4" }}>import</span>{" "}
                  <span style={{ color: "#89DCFE" }}>WebDeveloper</span> <span style={{ color: "#A4CBB4" }}>from</span>{" "}
                  './components/WebDeveloper'
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
            <Flex bg="gray.50" align="center" justify="center" borderTop="5px solid black">
              <Text fontSize="xl">聯絡方式</Text>
            </Flex>
          </Card>
        </Flex>

        {/* Content of the first component */}
        <Card
          border="3px solid black"
          boxShadow="7px 7px "
          bg="gray.50"
          justify="center"
          align="center"
          w="70%"
          direction="row"
          h="100px"
          gap={5}
        >
          <Icon fontSize={40} as={AiFillLinkedin} />
          <Icon fontSize={40} as={AiFillFacebook} />
          <Icon fontSize={40} as={AiFillGithub} />
          <Icon fontSize={35} as={SiGmail} />
        </Card>
      </VStack>
    </>
  );
};

export default ContactCard;
