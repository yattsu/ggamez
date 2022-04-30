import { Flex, Text } from '@chakra-ui/react';

export const GameMetacritic = ({ score }) => {
  return(
    <Flex
      direction='column'
      alignItems='center'
    >
      <Text
        fontWeight='bold'
        color='gray.200'
        fontSize='2xl'
      >
        Metacritic
      </Text>
      <Text
        fontWeight='bold'
        color='gray.200'
        fontSize='4xl'
      >
        {score}
      </Text>
    </Flex>
  )
}
