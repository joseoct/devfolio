import { useEffect, useState } from 'react';
import {
  Box,
  Fade,
  Flex,
  Image,
  Link,
  Progress,
  Text,
  VStack,
} from '@chakra-ui/react';
import { major, secondary } from './assets';
import { DencryptTextEffect } from './components/DencryptTextEffect';
import { Header } from './components/Header';
import Carousel from './components/Carousel';
import { LinkProject } from './components/LinkProject';
import { SectionTitle } from './components/SectionTitle';
import { Social } from './components/Social';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      return setShowContent(true);
    }, 0);
  }, []);

  return (
    <Flex direction="column">
      <Fade in={showContent} style={{ zIndex: 5 }}>
        <Header />
      </Fade>

      <Flex
        bg="blackAlpha.600"
        h="100vh"
        alignItems="center"
        justifyContent="center"
        id="home"
      >
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

      {showContent && (
        <Flex
          bg="blackAlpha.500"
          id="about-me"
          h="100vh"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            maxWidth={800}
            gap={8}
            alignItems="center"
            justifyContent="center"
            flexDir={['column', 'column', 'row']}
            margin={8}
          >
            <Box>
              <SectionTitle title="About me" index={1} />
              <Text fontSize="xl" textAlign="start">
                Hello! I am José Octávio, 24 years old, software developer based
                in Minas Gerais - Brazil, bachelor's degree in Computer Science
                from the
                <Link
                  href="http://www.utfpr.edu.br/"
                  target="_blank"
                  color="orange.300"
                  style={{ textDecoration: 'none' }}
                >
                  {' '}
                  Federal Technological University of Paraná.
                </Link>
              </Text>
              <Text as="p" fontSize="xl" textAlign="start">
                I love back-end, independent of the programming language, and I
                am currently deepening into front-end. I feel fulfilled when I
                finish a project and see things working, and I realized that it
                is not a programming language that forms a programmer, but his
                logic and his capacity to learn new things.
              </Text>
            </Box>
            <Image
              src={'https://avatars.githubusercontent.com/u/40551163?v=4'}
              rounded="full"
              boxSize={['200', '200', '300']}
            />
          </Flex>
        </Flex>
      )}

      {showContent && (
        <Flex
          bg="blackAlpha.400"
          id="skills"
          h="100vh"
          alignItems="center"
          justifyContent="center"
        >
          <Flex flexDir="column" gap={4}>
            <SectionTitle title="Major Skills" index={2} />
            <Flex
              w={['sm', 'md', 'xl', '4xl', '6xl']}
              p="6"
              bg="blackAlpha.200"
              rounded={10}
              flexDir="column"
            >
              <Flex flexDir="column" gap={4}>
                {major.map((item, index) => (
                  <Flex flexDir="column" key={index} gap={2}>
                    <Flex alignItems="end" gap={2}>
                      <Image src={item.icon} boxSize={['8', '12', '12']} />
                      <Text>{item.name}</Text>
                    </Flex>
                    <Progress value={item.knowledge} rounded={4} />
                  </Flex>
                ))}
              </Flex>
            </Flex>
            <Flex
              w={['sm', 'md', 'xl', '4xl', '6xl']}
              p="4"
              bg="blackAlpha.200"
              rounded={10}
              flexDir="column"
              alignItems="center"
            >
              <Text textAlign="center" fontSize="lg" mb={4}>
                In addition, I am also familiar with
              </Text>
              <Flex gap={['3', '6', '8', '16', '16']}>
                {secondary.map((item, index) => (
                  <Flex flexDir="column" alignItems="center" key={index}>
                    <Image
                      src={item.icon}
                      boxSize={['8', '8', '8', '10', '10']}
                    />
                    <Text
                      display={['none', 'block', 'block', 'block', 'block']}
                      fontSize="xs"
                    >
                      {item.name}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </Flex>{' '}
          </Flex>
        </Flex>
      )}

      {showContent && (
        <Flex
          bg="blackAlpha.300"
          id="project"
          h={['150vh', '130vh', '100vh', '100vh', '100vh']}
          alignItems="center"
          justifyContent="center"
          flexDir={['column', 'column', 'row']}
          gap={4}
        >
          <Flex
            gap={8}
            alignItems="center"
            justifyContent="center"
            flexDir={['column', 'column', 'row']}
            margin={8}
          >
            <Flex flexDir="column">
              <SectionTitle title="Featured Project" index={3} />

              <Text fontSize="lg" maxWidth={600} textAlign="start">
                As my most complex project, I present my final paper for
                obtaining the bachelor's degree in computer science: App to
                support the learning of cross-platform development
                technologies(like ReactNative, Flutter, Ionic) for mobile
                devices using the
                <LinkProject href="https://en.wikipedia.org/wiki/Spaced_repetition">
                  {' '}
                  Spaced Repetition Methodology{' '}
                </LinkProject>
                and inspired by the
                <LinkProject href="https://www.duolingo.com/">
                  {' '}
                  Duolingo{' '}
                </LinkProject>
                application. <br />{' '}
                <Text textAlign="center" fontWeight="bold">
                  The project was divided in three parts:{' '}
                </Text>
                Backend, used to manipulate data from the technologies, made
                with
                <LinkProject href="https://nodejs.org/en/"> NodeJS</LinkProject>
                (Rest Api with Express),
                <LinkProject href="https://www.prisma.io/"> Prisma</LinkProject>
                ,
                <LinkProject href="https://www.postgresql.org/">
                  {' '}
                  Postgres
                </LinkProject>
                ,<LinkProject href="https://jwt.io/"> JWT </LinkProject>
                and
                <LinkProject href="https://www.typescriptlang.org/">
                  {' '}
                  TypeScript
                </LinkProject>
                .
                <br />
                Fontend, used for the content management of the technologies,
                made with
                <LinkProject href="https://reactjs.org/"> React</LinkProject>(
                <LinkProject href="https://nextjs.org/">Next.js</LinkProject>),
                <LinkProject href="https://react-query-v3.tanstack.com/">
                  {' '}
                  React Query
                </LinkProject>
                ,
                <LinkProject href="https://chakra-ui.com/">
                  {' '}
                  Chakra UI
                </LinkProject>
                ,<LinkProject href="https://jwt.io/"> JWT </LinkProject>
                and
                <LinkProject href="https://www.typescriptlang.org/">
                  {' '}
                  TypeScript
                </LinkProject>
                .
                <br />
                App, used by the students to practice the exercises, was
                developed using
                <LinkProject href="https://reactnative.dev/">
                  {' '}
                  ReactNative
                </LinkProject>
                (<LinkProject href="https://expo.dev/">Expo</LinkProject>),
                <LinkProject href="https://react-query-v3.tanstack.com/">
                  {' '}
                  React Query
                </LinkProject>
                ,
                <LinkProject href="https://nativebase.io/">
                  {' '}
                  NativeBase
                </LinkProject>
                ,<LinkProject href="https://jwt.io/"> JWT </LinkProject>
                and
                <LinkProject href="https://www.typescriptlang.org/">
                  {' '}
                  TypeScript
                </LinkProject>
                .
                <br />
                If you are interested:
                <LinkProject href="https://drive.google.com/file/d/1wNvaCHskW_Ky1QivsNj1tYBnb6Hm9ljS/view?usp=sharing">
                  {' '}
                  link{' '}
                </LinkProject>
                to the final paper and
                <LinkProject href="https://youtu.be/LfmdWFlj1kk">
                  {' '}
                  link{' '}
                </LinkProject>
                to a video for a better explanation of the project. <br />
                All code repositories are available on
                <LinkProject href="https://github.com/joseoct?tab=repositories&q=frameaux&type=&language=&sort=">
                  {' '}
                  my github{' '}
                </LinkProject>
              </Text>
            </Flex>
            <Carousel />
          </Flex>
        </Flex>
      )}

      {showContent && (
        <Flex
          bg="blackAlpha.500"
          id="contact"
          h="100vh"
          alignItems="center"
          justifyContent="space-between"
          flexDir="column"
        >
          <div />
          <Flex
            maxWidth={800}
            gap={8}
            alignItems="center"
            justifyContent="center"
            flexDir={['column', 'column', 'row']}
            margin={8}
          >
            <Box>
              <SectionTitle title="Contact Me!" index={4} contact />
              <Text
                fontSize={['4xl', '4xl', '6xl', '6xl']}
                textAlign="center"
                fontWeight="bold"
              >
                Turning lines into solutions, not an alchemist, but I might as
                well be.
              </Text>
              <Text textAlign="center" fontSize="md">
                Currently looking for new opportunities, my inbox is always
                open.
              </Text>
              <Flex justifyContent="center" gap={4} mt={4}>
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
              </Flex>
            </Box>
          </Flex>
          <Flex as="footer">
            <Text color="gray.500" textAlign="center" m={4}>
              Designed & Built by José Octávio using ChakraUI and React
            </Text>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
