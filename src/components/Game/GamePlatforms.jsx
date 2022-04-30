import { Text, Flex, Box } from '@chakra-ui/react';

export const GamePlatforms = ({ platforms }) => {
  if(platforms.length == 0) {
    return null
  }

  return(
    <Flex
      gap='2'
    >
      <Text>Platforms:</Text>

      <Box>
        {
          [platforms.map(p => p.platform.name)].join(',')
        }
      </Box>
    </Flex>
  )
}
