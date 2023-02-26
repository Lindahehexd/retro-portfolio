import ContactCard from "@/components/ContactPage/ContactCard";
import ContactTitle from "@/components/ContactPage/ContactTitle";
import ContentLayout from "@/components/Layout/ContentLayout";
import Footer from "@/components/LayoutComponents/Footer";
import { Box, Center, Flex } from "@chakra-ui/react";


export default function ContactPage() {
  return (
    <>
    <ContentLayout>
      <>
      <ContactCard/>
      {/* <Flex align='center' justify='center' w='100%' bg='pink'> 
      </Flex> */}
      </>
    </ContentLayout>
    </>
  );
}
