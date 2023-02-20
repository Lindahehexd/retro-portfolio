import { Card, CardHeader, CardBody, CardFooter, Text, Flex, Button, VStack } from "@chakra-ui/react";



type ddd = {
  ggg: string
}

const ContactCard = () => {



  return (
    <>
<VStack>
    <Text fontWeight={700} fontSize='lg'> 歡迎深入了解或簡單聊聊，或我有符合貴公司的條件的話，以下是我的資訊: </Text>
      <Card border="3px solid black" boxShadow="7px 7px " ml={5}>
        <Flex h="30%" bg="teal.300" justify="center">
          <Text fontSize="xl" fontWeight={600}>
            聯絡方式
          </Text>
        </Flex>
        <CardBody>
          <Flex direction="column" bg="teal.900" color="#FFCB6B" p={3} border='4px solid black'>
            <Text fontSize="xl" fontWeight={600}>
              {/* <span style={{ color: "#A4CBB4" }}>import</span>
              <span style={{ color: "#9AC94A" }}>import</span>
              <span style={{ color: "#89DCFE" }}>藍import</span>
              <span style={{ color: "#EF9995" }}>洪</span> */}
              <span style={{ color: "#A4CBB4" }}>import</span> <span style={{ color: "#89DCFE" }}>WebDeveloper</span> <span style={{ color: "#A4CBB4" }}>from</span> './components/WebDeveloper'
            </Text>
            <Text fontSize="xl" fontWeight={600}>
              <span style={{ color: "#89DCFE" }}>{"<WebDeveloper"}</span> 
            </Text>
            <Text fontSize="xl" fontWeight={600}>
              <span style={{ color: "#EF9995" }}>{`name= `}</span>
              "林大鈞"
            </Text>
            <Text fontSize="xl" fontWeight={600}>
              <span style={{ color: "#EF9995" }}>{`email= `}</span>
              "tkd09152129@gmail.com"
            </Text>
            <Text fontSize="xl" fontWeight={600}>
              <span style={{ color: "#EF9995" }}>{`phone=  `}</span>
              "+886 0919390352"
            </Text>
            <Text fontSize="xl" fontWeight={600}>
              <span style={{ color: "#EF9995" }}>{`gitHub=  `}</span>
                "https://github.com/Lindahehexd"
            </Text>
            <Text fontSize="xl" fontWeight={600}>
              <span style={{ color: "#89DCFE" }}  >     {"/>"}</span>
            </Text>
          </Flex>
        </CardBody>
        <Flex h="20%" bg="pink.300" align="center" justify="flex-end">
          <Button as="a" bg="white"  boxShadow='4px 4px ' border="2px solid black" borderRadius="lg" aria-label="Home" my={5} mr={2}>
            寄信
          </Button>
          <Button as="a" bg="white" boxShadow='4px 4px ' border="2px solid black" borderRadius="lg" aria-label="Home" my={5} mr={2}>
            查看內容
          </Button>
        </Flex>
      </Card>
</VStack>
    </>
  );
};

export default ContactCard;
