import AboutMeBox from "@/components/AboutPage/AboutMeBox";
import ContentLayout from "@/components/Layout/ContentLayout";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>About_Da_Jiun</title>
        <meta name="description" content="About Me" />
        <meta property="og:image" content="https://i.imgur.com/4zduMOF.png" />
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
