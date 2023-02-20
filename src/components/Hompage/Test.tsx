import { Flex, VStack, Text, Heading } from "@chakra-ui/react";
import TypeEffect from "./TypeEffect";
import { Highlight } from "@chakra-ui/react";

const Test = () => {
  return (
    <Flex fontSize={30} align="center" border="7px solid black"  w="100%" h='80vh'>
      <Flex direction="column">
        <Heading bg="pink" fontSize='4xl'> Hi 我叫林大鈞 </Heading>
        <TypeEffect />
        <Flex bg="pink">
          <Text mt="6" fontWeight="md">
            <Highlight query={["關於我","作品集"]} styles={{ px: '2', py: '1', rounded: 'full', bg: 'pink.300' }}>
              點選關於我或是作品集以了解更多
            </Highlight>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Test;
