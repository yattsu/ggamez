import { Heading } from '@chakra-ui/react';

export const SectionTitle = ({ text }) => {
  return(
    <Heading
      as='h2'
      size='2xl'
      color='gray.100'
      w='full'
      textAlign='left'
      mb='5'
    >
      {text}
    </Heading>
  )
}
