import { useState, useEffect } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { HiEmojiHappy, HiEmojiSad } from 'react-icons/hi';

export const GameRatings = ({ ratings }) => {
  const [icons, setIcons] = useState(null)

  useEffect(() => {
    setIcons({
      exceptional: HiEmojiSad,
      recommended: HiEmojiHappy,
      meh: HiEmojiSad,
      skip: HiEmojiSad,
    }
    )

  }, [])

  if(!icons) {
    return null
  }

  return(
    <Flex
      gap='3'
      wrap='wrap'
      color='gray.500'
      w='full'
      justify='space-evenly'
      py='5'
      px='3'
      border={['none', 'none', '2px solid rgba(113, 128, 150, .5)']}
      rounded='3xl'
      shadow={['none', 'none', 'xl']}
      my='5'
    >
      {
        ratings.map(r => (
          <Flex
            direction='column'
            textAlign='left'
          >
            <Text
              fontSize='md'
              fontWeight='bold'
            >
              {r.title.toUpperCase()}
            </Text>
            <Text
              fontSize='lg'
            >
              {`${r.count} (${r.percent}%)`}
            </Text>
          </Flex>
        ))
      }
    </Flex>
  )
}
