import { Link } from '@chakra-ui/react';

interface LinkProjectProps {
  href: string;
  children: string;
}

export const LinkProject = ({ href, children }: LinkProjectProps) => {
  return (
    <Link href={href} target="_blank" color="orange.300" style={{ textDecoration: "none" }}>{children}</Link>
  )
}
