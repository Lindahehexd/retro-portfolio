import ContentLayout from "@/components/Layout/ContentLayout";
import ProjectCard from "@/components/ProjectPage/ProjectCard";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Projects_Da_Jiun</title>
        <meta name="description" content="My projects.我的作品集" />
        <meta property="og:image" content="https://i.imgur.com/4zduMOF.png" />
      </Head>
      <ContentLayout>
        <>
          <ProjectCard />
        </>
      </ContentLayout>
    </>
  );
}
