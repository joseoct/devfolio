import { Collapse, Fade, ScaleFade, Slide, SlideFade, Text } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import { useDencrypt } from "use-dencrypt-effect";

 
interface DencryptTextEffectProps {
  values: string[];
  fontSize?: string;
  time: number;
  fontWeight?: string;
  inverted?: boolean;
}
 
export const DencryptTextEffect = ({
  values,
  fontSize,
  time,
  fontWeight,
  inverted,
}: DencryptTextEffectProps) => {
  const { result, dencrypt } = useDencrypt();

  useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, time);

    return () => clearInterval(action);
  }, [dencrypt, values, time]);

  return (
    <Collapse in={!!result}>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        textDecoration={inverted ? 'underline' : 'none'}
        textDecorationColor={inverted ? '#fff' : 'none'}
        bgClip={inverted ? 'text' : 'none'}
        fontSize={fontSize}
        fontWeight="bold"
        p={result ? 2 : 0}
      >
        {result}
      </Text>
    </Collapse>
  );
};