import { Card, CardHeader, CardBody, CardFooter, Text, Flex, Button, Image, Box, Heading, Divider, Stack, HStack } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";

const AboutMeBox = () => {
  return (
    <>

<Flex direction='column'>



      <Flex align="center" direction="column">
      
        <Card border="3px solid black" boxShadow="7px 7px " ml={5} bg="orange.200">
          <Flex bg="teal.300" justify="center">
            <Text fontSize="xl" fontWeight={600}>
              關於我
            </Text>
          </Flex>
          <CardBody>
            <Flex direction="column" bg="green.200" color="#FFCB6B" border="5px solid black" borderRadius="xl">
              <Flex>
                <Image src="/aboutme3.png" alt="" objectFit="contain" boxSize="250px" />
              </Flex>
            </Flex>

            <Flex mt={3} align="center" justify="center">
              <Text fontWeight={800} fontSize="xl">
                {" "}
                @ 林大鈞{" "}
              </Text>
            </Flex>
            <Flex justify='center'>
            <Button as="a" bg="gray.50"  boxShadow="4px 4px " border="2px solid black" borderRadius="lg" aria-label="Home" my={5} mr={2}>
            下載履歷
          </Button>

            </Flex>
    
          </CardBody>
        </Card>
      </Flex>
</Flex>



    </>
  );
};

export default AboutMeBox;
