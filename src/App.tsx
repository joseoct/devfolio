import { Box, Flex, HStack, VStack } from '@chakra-ui/react';
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { DencryptTextEffect } from './components/DencryptTextEffect';
import { Social } from './components/Social';


function App() {
  return (
    <Flex direction="column">
      <HStack
        h="100vh"
        alignItems="center"
        justifyContent="space-between"
        p={16}
      >
        <Box>Informações</Box>
        
        <VStack align="start">
          <DencryptTextEffect
            fontSize="4xl"
            values={['José Octávio']}
            time={0}
          />
          <DencryptTextEffect
            fontSize="8xl"
            fontWeight="bold"
            values={['In']}
            time={2000}
          />
          <DencryptTextEffect
            fontSize="8xl"
            fontWeight="bold"
            values={['Progress']}
            time={2000}
          />
          <DencryptTextEffect
            fontSize="xl"
            values={['NodeJS', 'ReactJS', 'React-Native']}
            time={3000}
          />
        </VStack>

        <VStack spacing={4}>
          <Social
            label="Github"
            href="https://github.com/joseoct"
            icon={faGithub}
          />
          <Social
            label="LinkedIn"
            href="https://linkedin.com/in/josé-octávio-8931b41a8"
            icon={faLinkedin}
          />
          <Social
            label="WhatsApp"
            href="https://github.com/joseoct"
            icon={faWhatsapp}
          />
        </VStack>
      </HStack>
    </Flex>
  );
}

export default App;
