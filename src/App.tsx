import { Box, Fade, Flex, Image, Link, Text, Tooltip, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { assets } from './assets';
import { DencryptTextEffect } from './components/DencryptTextEffect';
import { Header } from './components/Header';

export function App() {

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      return (
        setShowContent(true)
      )
    }, 0)
  }, [])

  return (
    <Flex direction="column">
      <Fade in={showContent}>
        <Header />
      </Fade>

      <Flex bg="blackAlpha.600" h="100vh" alignItems="center" justifyContent="center">
        <VStack align="start">
          <DencryptTextEffect
            inverted
            fontSize={['3xl']}
            values={['José Octávio']}
            time={0}
          />
          <DencryptTextEffect
            fontSize={['6xl', '6xl', '8xl']}
            values={['Full Stack']}
            time={1500}
          />
          <DencryptTextEffect
            fontSize={['6xl', '5xl', '8xl']}
            values={['Developer']}
            time={1500}
          />
          <DencryptTextEffect
            fontSize={['xl', '2xl']}
            values={['NodeJS', 'ReactJS', 'React-Native']}
            time={1500}
          />
        </VStack>
      </Flex>

      {
        showContent && (
          <Flex
            bg="blackAlpha.500"
            id="about-me"
            h="100vh"
            alignItems="center"
            justifyContent="center"
          >

            <Flex maxWidth={800} gap={8} alignItems="center" justifyContent="center" flexDir={['column', 'column', 'row']} margin={8}>
              <Image src={"https://avatars.githubusercontent.com/u/40551163?v=4"} rounded="full" boxSize={['200', '200', '300']} />
              <Box>
                <Text fontSize="lg" textAlign="center">
                  Born in Brazil, 24 years old, bachelor's degree in Computer Science from the
                  <Link href="http://www.utfpr.edu.br/" target="_blank" color="orange.300" style={{ textDecoration: "none" }}> Federal Technological University of Paraná.</Link>
                </Text>
                <Text as="p" fontSize="lg" textAlign="center">
                  I love back-end, independent of the programming language, and I am currently deepening into front-end.
                  I feel fulfilled when I finish a project and see things working, and I realized that it is not a programming
                  language that forms a programmer, but his logic and his capacity to learn new things.
                </Text>
                <br />
                <Flex justifyContent="center" alignItems="center" flexDirection="row" gap={2} flexDir="row">
                  <Text fontSize="small" textAlign="center" >
                    Currently, my development environment is:
                  </Text>
                  <Flex gap={1}>
                    <Tooltip label={assets[6].name}>
                      <Image src={assets[6].icon} boxSize={6} />
                    </Tooltip>
                    <Tooltip label={assets[7].name}>
                      <Image src={assets[7].icon} boxSize={6} />
                    </Tooltip>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        )
      }

      {
        showContent && (
          <Flex
            bg="blackAlpha.400"
            id="about-me"
            h="100vh"
            alignItems="center"
            justifyContent="center"
          >
            {assets.map((asset, index) => (
              <Box key={index}>
                <Tooltip label={asset.name}>
                  <Image
                    src={asset.icon}
                    alt="logo"
                  />
                </Tooltip>
              </Box>
            ))}
          </Flex>
        )
      }
    </Flex >
  );
}
