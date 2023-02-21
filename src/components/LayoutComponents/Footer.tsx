import { Flex, Heading } from "@chakra-ui/react"

const Footer = () => {
  return (

    <Flex  bottom="0" position="absolute" w='100%' mt="auto" color='white' borderTop='7px solid black' bg="#ABCCDD" display="flex" justifyContent="space-evenly" p={2}>
    <Flex direction="column" align="center">
      <Heading size="xs">Da-Jiun Lin &copy; All rights reserved</Heading>
    </Flex>
  </Flex>
  );
};

export default Footer;
