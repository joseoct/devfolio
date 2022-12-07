import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef } from "react";
import { Social } from "./Social";

export function Header() {

  const header = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      header.current!.style.backgroundColor = `rgba(20, 19, 24, ${window.scrollY / 1000})`;
      console.log(header.current!.style.backgroundColor);
    };

    return () => {
      window.addEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <Flex
      ref={header}
      as="header"
      position="fixed"
      width="100%"
      py={8}
      px={[8, 20, 20, 20, 20]}
      alignItems="center"
      justifyContent="space-around"
    >
      <Flex gap={8} alignItems="center">
        <Text fontSize={24}>DevFolio</Text>

        <Flex gap={4}>
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
        </Flex>
      </Flex>

      <Menu placement="bottom-end">
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon boxSize={8} />}
          variant="ghost"
        />
        <MenuList>
          <Link _hover={{ textDecoration: 'none' }} href="#about-me" fontSize={20}>
            <MenuItem>
              Sobre mim
            </MenuItem>
          </Link>
          <Link _hover={{ textDecoration: 'none' }} href="" fontSize={20}>
            <MenuItem>
              Habilidades
            </MenuItem>
          </Link>
          <Link _hover={{ textDecoration: 'none' }} href="" fontSize={20}>
            <MenuItem>
              Portfólio
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Flex>
  );
}
