import { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';

export const GameDescription = ({ text }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(expanded => !expanded);
  }

  return(
    <Box
      onClick={handleClick}
      position='relative'
      cursor='pointer'
      color='gray.400'
      maxH={expanded ? '900' : '56'}
      overflow='hidden'
      transition='.5s'
    >
      {
      !expanded
        ?
          <Box
            position='absolute'
            w='full'
            h='full'
            left='0'
            top='0'
            bgGradient='linear(to-t, gray.800, transparent 50% )'
          >
            <Text
              position='absolute'
              bottom='0'
              right='0'
              textShadow='0px 0px 10px #111'
            >
              Read more
            </Text>
          </Box>
        :
            <Text
              position='absolute'
              bottom='0'
              right='0'
              textShadow='0px 0px 10px #111'
            >
              Read less 
            </Text>
      }

      {text}

    </Box>
  )
}
