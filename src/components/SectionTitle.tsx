import { Text, Flex, Divider } from '@chakra-ui/react';

interface SectionTitleProps {
  title: string;
  index: number;
  contact?: boolean;
}

export function SectionTitle({ title, index, contact }: SectionTitleProps) {
  return (
    <Flex flexDir="row" gap={4} alignItems="center" mb={4} whiteSpace="nowrap">
      {contact && <Divider borderColor="gray.600" />}
      <Text color="orange.300" fontSize="2xl">
        0{index}.
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title}
      </Text>
      <Divider borderColor="gray.600" />
    </Flex>
  );
}
