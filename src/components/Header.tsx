import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef } from "react";
import { Social } from "./Social";

export function Header() {

  const header = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      header.current!.style.backgroundColor = `rgba(14, 17, 23, ${window.scrollY / 1000})`;
    };

    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
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
        <Link fontSize={24} href="#home">Devfolio</Link>

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
          _hover={{ bg: "transparent", textColor: "orange.100" }}
        />
        <MenuList>
          <Link _hover={{ textDecoration: 'none' }} href="#about-me" fontSize={20}>
            <MenuItem>
              About me
            </MenuItem>
          </Link>
          <Link _hover={{ textDecoration: 'none' }} href="#skills" fontSize={20}>
            <MenuItem>
              Skills
            </MenuItem>
          </Link>
          <Link _hover={{ textDecoration: 'none' }} href="" fontSize={20}>
            <MenuItem>
              ?
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Flex>
  );
}
