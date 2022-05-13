import { Fade, Link, Tooltip } from "@chakra-ui/react";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface SocialProps {
  label: string;
  href: string;
  icon: IconDefinition;
}

export function Social({ label, href, icon }: SocialProps) {

  const [showSocials, setShowSocials] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      return (
        setShowSocials(true)
      )
    }, 2500)
  },[])

  return (
    <Fade in={showSocials}>
      <Tooltip label={label} placement="left">
        <Link href={href} target="_blank">
          <FontAwesomeIcon size="2x" icon={icon} />
        </Link>
      </Tooltip>
    </Fade>
  );
}