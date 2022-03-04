import { Text } from '@chakra-ui/react';

export const CategoryLabel = ({ text }) => {
  return(
    <Text
      color='gray.100'
      fontWeight='bold'
      fontSize='2xl'
      w='full'
      textAlign={['center', 'center', 'left']}
      mt='2'
    >
      {text}
    </Text>
  )
}
