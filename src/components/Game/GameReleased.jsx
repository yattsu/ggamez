import { Flex, Box, Text } from '@chakra-ui/react';

export const GameReleased = ({ released }) => {
  return(
    <Flex
      gap='2'
    >
      <Text>Released:</Text>

      <Box>
        {released}
      </Box>
    </Flex>
  )
}
