import { Link, Tooltip } from '@chakra-ui/react';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SocialProps {
  label: string;
  href: string;
  icon: IconDefinition;
}

export function Social({ href, icon, label }: SocialProps) {
  return (
    <Tooltip label={label} placement="bottom" zIndex={999}>
      <Link
        _hover={{
          textColor: 'orange.300',
        }}
        href={href}
        target="_blank"
      >
        <FontAwesomeIcon size="2x" icon={icon} />
      </Link>
    </Tooltip>
  );
}
