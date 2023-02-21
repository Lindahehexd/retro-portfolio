import Navbar from "@/components/LayoutComponents/Navbar";
import { Spinner, Center, Flex, Box, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Footer from "../LayoutComponents/Footer";

interface LayoutProps {
  children: React.ReactElement;
  isLoading: boolean;
}

const Layout = ({ children, isLoading }: LayoutProps) => {
  const router = useRouter();
  const { pathname } = router;
 

  return (
    <>
      <Box>
        <Navbar />
        <Heading>{pathname === '/' && ''}</Heading>
        <Heading>{pathname === '/about' && '關於我'}</Heading>
        <Heading>{pathname === '/projects' && '作品集'}</Heading>
        <Heading>{pathname === '/contact' && '聯絡方式'}</Heading>
        {isLoading && (
          <Center h="100vh">
            <Spinner />
          </Center>
        )}
        <Box flex="1">{children}</Box>
        {/* <Footer  /> */}
      </Box>
    </>
  );
};

export default Layout;
