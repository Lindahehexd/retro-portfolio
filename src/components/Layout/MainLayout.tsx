import Navbar from "@/components/LayoutComponents/Navbar";
import { Spinner, Center, Flex } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactElement;
  isLoading: boolean;
}

const Layout = ({ children, isLoading }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {isLoading && (
        <Center h="100vh" w="100%">
          <Spinner />
        </Center>
      )}
      {children}
    </>
  );
};

export default Layout;
