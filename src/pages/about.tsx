import AboutMeBox from "@/components/AboutPage/AboutMeBox";
import AboutTitle from "@/components/AboutPage/AboutTitle";
import Content from "@/components/AboutPage/Content";
import ContentLayout from "@/components/Layout/ContentLayout";
import { Flex } from "@chakra-ui/react";


export default function ContactPage() {
  return (
    <>
      <AboutTitle/>
    <ContentLayout>
      <>
      <Flex justify='center' gap={5}>
      <AboutMeBox/>
      <Content/>
      </Flex>
      </>
    </ContentLayout>
    </>
  );
}
