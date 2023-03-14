import ContentLayout from "@/components/Layout/ContentLayout";
import ProjectCard from "@/components/ProjectPage/ProjectCard";
import { Heading } from "@chakra-ui/react";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Projects_Da_Jiun</title>
        <meta name="description" content="My projects.我的作品集" />
        <meta property="og:image" content="/meta1.jpg" />
      </Head>
      <ContentLayout>
        <>
          <ProjectCard />
        </>
      </ContentLayout>
    </>
  );
}
