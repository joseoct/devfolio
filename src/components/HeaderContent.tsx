import { Fade, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface SocialProps {
  label: string;
  href?: string;
}

export function HeaderContent({ label, href }: SocialProps) {

  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      return (
        setShowHeader(true)
      )
    }, 2500)
  },[])

  return (
    <Fade in={showHeader}>
      <Link href={href} fontSize={24}>{label}</Link>
    </Fade>
  );
}