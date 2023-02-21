import ContactCard from "@/components/ContactPage/ContactCard";
import ContactTitle from "@/components/ContactPage/ContactTitle";
import ContentLayout from "@/components/Layout/ContentLayout";
import { Box, Center, Flex } from "@chakra-ui/react";


export default function ContactPage() {
  return (
    <>
    <ContentLayout>
      <>
      <Box>
      <ContactTitle/>
      <Center h='100%' w='100%'>
      <ContactCard/>
      </Center>
      </Box>
      {/* <Flex align='center' justify='center' w='100%' bg='pink'> 
      </Flex> */}
      </>
    </ContentLayout>
    </>
  );
}
