import {Box, Flex } from "@chakra-ui/react";
interface PageContentLayoutProps {
  children: React.ReactElement;
}

// Assumes array of two children are passed
const ContentLayout: React.FC<PageContentLayoutProps> = ({ children }) => {
//   console.log(children);
return (
  // background + center the contents inside
  <Flex
    justify="center"
    p="16px 0px"
    // border='3px solid red'
    // h='100vh'
  >
    {/* Wrapper */}
    <Flex
    //   border="5px solid green"
      w="100%"
      maxW="1300px"
      p="2"
      // bg='pink.100'
    >
      <Flex
        // border="1px solid red"
        mr={2}
        w='100%'
        // h='100vh'
        // bg='pink'
        justify='center'
      >
        {children}
      </Flex>

    </Flex>
  </Flex>
);
};
export default ContentLayout;
