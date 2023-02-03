import { Flex, Text, Link } from '@chakra-ui/react';

interface NavItemProps {
  title: string;
  href: string;
  index: number;
}

export function NavItem({ title, href, index }: NavItemProps) {
  return (
    <Flex flexDir="row" gap={2}>
      <Text color="orange.300">0{index}.</Text>
      <Link href={href}>
        <Text>{title}</Text>
      </Link>
    </Flex>
  );
}
