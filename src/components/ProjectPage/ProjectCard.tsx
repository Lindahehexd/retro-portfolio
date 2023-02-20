import { Card, CardHeader, CardBody, CardFooter, Text, Flex, Button } from "@chakra-ui/react";

const ProjectCard = () => {
  return (
    <>
      <Card border="3px solid black" boxShadow="7px 7px " ml={5} h="100%">
        <Flex h="30%" bg="teal.300"></Flex>
        <CardBody>
          <Text fontSize="xl" fontWeight={600}>
            內容內容內容內容內容內容內容內容內容內容內容內容內容
          </Text>
        </CardBody>
        <Flex h="20%" bg="pink.300" align="center" justify="flex-end">
          <Button as="a" bg="white" border="4px solid black" borderRadius="lg" aria-label="Home" my={5} mr={2}>
            前往連結
          </Button>
          <Button as="a" bg="white" border="4px solid black" borderRadius="lg" aria-label="Home" my={5} mr={2}>
            查看內容
          </Button>
        </Flex>
      </Card>
    </>
  );
};

export default ProjectCard;
