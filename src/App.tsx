import { Flex, HStack, VStack } from '@chakra-ui/react';
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from 'react';
import { DencryptTextEffect } from './components/DencryptTextEffect';
import { HeaderContent } from './components/HeaderContent';
import { Social } from './components/Social';


function App() {

  const [showSections, setShowSections] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      return (
        setShowSections(true)
      )
    }, 2500)
  },[])

  return (
    <Flex direction="column">
      <HStack
        h="100vh"
        alignItems="center"
        justifyContent="space-between"
        p={16}
      >
        <HStack transform="rotate(-90deg)" m={-40} gap={4}>
          <HeaderContent href="#section" label="Sobre mim" />
          <HeaderContent href="#section" label="Habilidades" />
          <HeaderContent href="#section" label="Portfólio" />
        </HStack>

        <VStack align="start">
          <DencryptTextEffect
            inverted
            fontSize="4xl"
            values={['José Octávio']}
            time={0}
          />
          <DencryptTextEffect
            fontSize="8xl"
            fontWeight="bold"
            values={['Full Stack']}
            time={1500}
          />
          <DencryptTextEffect
            fontSize="8xl"
            fontWeight="bold"
            values={['Developer']}
            time={1500}
          />
          <DencryptTextEffect
            fontSize="xl"
            values={['NodeJS', 'ReactJS', 'React-Native']}
            time={2500}
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

      {showSections && (
        <Flex
          id="section1"
          h="100vh"
          alignItems="center"
          justifyContent="space-between"
          p={16}
        >
          Oi
        </Flex>
      )}
    </Flex>
  );
}

export default App;
