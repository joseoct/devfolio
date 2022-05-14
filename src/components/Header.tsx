import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Text, useBreakpointValue } from "@chakra-ui/react";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useState } from "react";
import { Social } from "./Social";

export function Header() {

  const isMb = useBreakpointValue({
    base: true,
    sm: false,
  });

  const [offsetY, setOffsetY] = useState(0);
  const header = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);

      if (header.current) {
        header.current.style.backgroundColor = `rgba(0, 0, 0, ${offsetY / 300})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, [offsetY]);

  return (
    <Flex
      ref={header}
      as="header"
      maxWidth="100%"
      w="100%"
      mx="auto"
      px="60"
      py={4}
      position="fixed"
      alignItems="center"
      justifyContent="space-between"
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
          _hover={{
            textColor: 'purple.400',
          }}
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon boxSize={8} />}
          variant="ghost"
        />
        <MenuList bg="#000">
          <MenuItem>
            <Link _hover={{ textDecoration: 'none' }} href="" fontSize={24}>
              Sobre mim
            </Link>
          </MenuItem>
          <MenuItem>
            <Link _hover={{ textDecoration: 'none' }} href="" fontSize={24}>
              Habilidades
            </Link>
          </MenuItem>
          <MenuItem>
            <Link _hover={{ textDecoration: 'none' }} href="" fontSize={24}>
              Portfólio
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}