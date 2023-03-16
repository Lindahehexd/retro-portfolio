import ContentLayout from "@/components/Layout/ContentLayout";
import HomeItem from "@/components/Hompage/Home";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home_Da_Jiun</title>
        <meta name="description" content="Hi there, this is Da-Jiun Lin's portfolio website.嗨～這是大鈞的個人網站" />
        <meta property="og:image" content="https://i.imgur.com/4zduMOF.png" />
      </Head>
      <ContentLayout>
        <>
          <HomeItem />
        </>
      </ContentLayout>
    </>
  );
}
