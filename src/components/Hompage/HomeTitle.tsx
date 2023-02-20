import { Box, Flex, Heading, VStack } from "@chakra-ui/react";

const HomeTitle = () => {
  return (
    <VStack>
    <Flex  w="100%" my={5} ml={6}>
      <Heading size="3xl" color="#7D7259"> Home </Heading>
    </Flex>
    </VStack>
  );
};

export default HomeTitle;
