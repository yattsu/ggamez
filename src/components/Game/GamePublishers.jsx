import { Flex, Box, Text } from '@chakra-ui/react';

export const GamePublishers = ({ publishers }) => {
  if(publishers.length == 0) {
    return null
  }

  return(
    <Flex
      gap='2'
    >
      <Text>Publishers:</Text>

      <Box>
        {
          [publishers.map(p => p.name)].join(',')
        }
      </Box>
    </Flex>
  )
}
