import { Flex, VStack, Text, Button, Card, CardHeader, CardBody, CardFooter, } from "@chakra-ui/react";
import React from "react";

const Content = () => {
  return (
        


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

















      
  );
};

export default Content;
