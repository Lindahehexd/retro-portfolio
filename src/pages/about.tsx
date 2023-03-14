import AboutMeBox from "@/components/AboutPage/AboutMeBox";
import ContentLayout from "@/components/Layout/ContentLayout";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
        <Head>
        <title>About_Da_Jiun</title>
        <meta
          name="description"
          content="About me. 關於我"
        />
        <meta property="og:image" content="/meta1.jpg" />
      </Head>
      <ContentLayout>
        <>
            {/* <About /> */}
            <AboutMeBox />
            {/* <Content /> */}
        </>
      </ContentLayout>
    </>
  );
}
