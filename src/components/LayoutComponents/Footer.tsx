import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <Flex as="footer" justify="center" bg="black" color="white" align="center" direction='column'>
      <HStack>
        <Text textAlign="center"> 2023 Da-Jiun Lin </Text>
        <Link href="https://github.com/Lindahehexd">
          <Icon fontSize={30} as={AiFillGithub} cursor="pointer" color="white" />
        </Link>
      </HStack>
      <Text fontSize="xs"> Made with Next.js, TypeScript, Chakara UI </Text>
    </Flex>
  );
};

export default Footer;
