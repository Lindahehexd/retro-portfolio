import ContactCard from "@/components/ContactPage/ContactCard";
import ContactTitle from "@/components/ContactPage/ContactTitle";
import ContentLayout from "@/components/Layout/ContentLayout";
import { Flex } from "@chakra-ui/react";


export default function ContactPage() {
  return (
    <>
      <ContactTitle/>
    <ContentLayout>
      <>
      <Flex align='center' justify='center' w='100%' bg='pink'> 
      <ContactCard/>
      </Flex>
      </>
    </ContentLayout>
    </>
  );
}
