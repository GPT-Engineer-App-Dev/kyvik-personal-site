import { Box, Container, Heading, Text, Image, Flex, SimpleGrid, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Box bg="white" boxShadow="md" py={8}>
        <Container maxW="container.lg">
          <Flex align="center">
            <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3MTM1NDc0MTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile" mr={8} />
            <Box>
              <Heading as="h1" size="xl">
                Kristian Kyvik
              </Heading>
              <Text fontSize="xl" color="gray.500">
                Software Engineer
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.lg" py={16}>
        <Box mb={12}>
          <Heading as="h2" size="xl" mb={4}>
            About Me
          </Heading>
          <Text fontSize="lg">I am a software engineer with experience in web development. I enjoy building modern, performant applications and working across the full stack. In my free time I like contributing to open source, learning new technologies, and going on hikes.</Text>
        </Box>

        <Box mb={12}>
          <Heading as="h2" size="xl" mb={4}>
            Skills
          </Heading>
          <SimpleGrid columns={2} spacing={4}>
            <Text>JavaScript</Text>
            <Text>React</Text>
            <Text>Node.js</Text>
            <Text>TypeScript</Text>
            <Text>GraphQL</Text>
            <Text>PostgreSQL</Text>
          </SimpleGrid>
        </Box>

        <Box mb={12}>
          <Heading as="h2" size="xl" mb={4}>
            Projects
          </Heading>
          <SimpleGrid columns={3} spacing={8}>
            <Box>
              <Image src="https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3MTM1NDgxNjF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 1" mb={2} />
              <Heading as="h3" size="md">
                Project 1
              </Heading>
              <Text>Description of project 1 goes here</Text>
            </Box>
            <Box>
              <Image src="https://images.unsplash.com/photo-1566241477600-ac026ad43874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx3ZWJzaXRlJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3MTM1NDgxNjF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 2" mb={2} />
              <Heading as="h3" size="md">
                Project 2
              </Heading>
              <Text>Description of project 2 goes here</Text>
            </Box>
            <Box>
              <Image src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHx3ZWJzaXRlJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3MTM1NDgxNjF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 3" mb={2} />
              <Heading as="h3" size="md">
                Project 3
              </Heading>
              <Text>Description of project 3 goes here</Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Contact
          </Heading>
          <Flex direction="column">
            <Link href="#" mb={2}>
              <Icon as={FaEnvelope} mr={2} />
              kristian@kyvik.com
            </Link>
            <Link href="#" mb={2}>
              <Icon as={FaGithub} mr={2} />
              github.com/kristiankyvik
            </Link>
            <Link href="#">
              <Icon as={FaLinkedin} mr={2} />
              linkedin.com/in/kristiankyvik
            </Link>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;
