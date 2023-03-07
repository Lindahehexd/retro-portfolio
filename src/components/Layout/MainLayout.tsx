import Navbar from "@/components/LayoutComponents/Navbar";
import { Spinner, Center, Flex, Box, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import Footer from "../LayoutComponents/Footer";

interface LayoutProps {
  children: React.ReactElement;
  isLoading: boolean;
}

const Layout = ({ children, isLoading }: LayoutProps) => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <Box>
        <Navbar />
        <Center mt={{ base: 6, md: 4 }}>
          {pathname === "/projects" && <Heading> 作品集</Heading>}
          {pathname === "/contact" && <Heading> 聯絡方式</Heading>}
        </Center>

        {isLoading && (
          <Center h="85vh">
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
