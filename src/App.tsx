import { Fade, Flex, Image, HStack, VStack, Tooltip } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { DencryptTextEffect } from './components/DencryptTextEffect';
import { Header } from './components/Header';

import { assets } from './assets';

function App() {

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      return (
        setShowContent(true)
      )
    }, 3000)
  },[])

  return (
    <Flex direction="column">
      <Fade in={showContent}>
        <Header />
      </Fade>

      <HStack h="100vh" alignItems="center" justifyContent="center" p={16}>
        <VStack align="start">
          <DencryptTextEffect
            inverted
            fontSize={['2xl', '3xl']}
            values={['José Octávio']}
            time={0}
          />
          <DencryptTextEffect
            fontSize={['4xl', '5xl', '8xl']}
            values={['Full Stack']}
            time={1500}
          />
          <DencryptTextEffect
            fontSize={['4xl', '5xl', '8xl']}
            values={['Developer']}
            time={1500}
          />
          <DencryptTextEffect
            fontSize={['xl', '2xl']}
            values={['NodeJS', 'ReactJS', 'React-Native']}
            time={1500}
          />
        </VStack>
      </HStack>

      {showContent && (
        <Flex
          id="section1"
          h="100vh"
          alignItems="center"
          justifyContent="space-between"
          p={16}
        >
          {assets.map((asset, index) => (
            <Tooltip label={asset.name}>
              <Image
                key={index}
                src={asset.icon}
                alt="logo"
                maxW="100%"
                maxH="100%"
                objectFit="contain"
              />
            </Tooltip>
          ))}
        </Flex>
      )}
    </Flex>
  );
}

export default App;
