import ContactCard from "@/components/ContactPage/ContactCard";
import ContentLayout from "@/components/Layout/ContentLayout";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact_Da_Jiun</title>
        <meta name="description" content="My contact infomation. 我的聯絡方式" />
        <meta property="og:image" content="https://i.imgur.com/4zduMOF.png" />
      </Head>
      <ContentLayout>
        <>
          <ContactCard />
          {/* <Flex align='center' justify='center' w='100%' bg='pink'> 
      </Flex> */}
        </>
      </ContentLayout>
    </>
  );
}
