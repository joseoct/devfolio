import { Text } from '@chakra-ui/react';
import { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";

 
interface DencryptTextEffectProps {
  values: string[];
  fontSize?: string;
  time: number;
  fontWeight?: string;
}
 
export const DencryptTextEffect = ({ values, fontSize, time, fontWeight }: DencryptTextEffectProps) => {
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
    <Text
      fontSize={fontSize}
      fontWeight={fontWeight}
      bgGradient="linear(to-r, #fe1700, #fa006b)"
      textColor="#08081a"
      p={result ? 2 : 0}
    >
      {result}
    </Text>
  );
};