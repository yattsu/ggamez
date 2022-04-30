import { useState } from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { MenuGameButton } from './MenuGameButton';

export const MenuGenres = ({ visible, genres }) => {
  const [expanded, setExpanded] = useState(false);

  const handleShowMoreClick = () => {
    setExpanded(expanded => !expanded);
  }

  return(
    <>
      <Flex
        position='relative'
        direction='column'
        w='full'
        maxH={expanded ? '800' : '300'}
        overflowY='clip'
        transition='.7s'
        p='2'
      >
        {
        !expanded
          ?
            <Box
              position='absolute'
              left='0'
              bottom='0'
              w='full'
              h='5'
              bgGradient='linear(to-t, gray.800, transparent)'
              zIndex='20'
            />
          :
            null
        }
        {
        genres.map(g => (
          <MenuGameButton label={g.name} slug={g.slug} href={`/genre/${g.slug}`} />
        ))
        }
      </Flex>
      <Flex
        direction='column'
        color='gray.500'
        onClick={handleShowMoreClick}
        cursor='pointer'
      >
        {
        expanded
          ?
            <Button
              _hover={{
                bg:'gray.700'
              }}
              leftIcon={<ChevronUpIcon />}
              bg='transparent'
              py='0'
              px='1'
              rounded='full'
              fontWeight='bold'
              transition='.1s'
              fontSize='xs'
            >
              Show less
            </Button>
          :
            <Button
              _hover={{
                bg:'gray.700'
              }}
              leftIcon={<ChevronDownIcon />}
              bg='transparent'
              py='0'
              px='2'
              rounded='full'
              fontWeight='bold'
              transition='.1s'
              fontSize='xs'
            >
              Show more
            </Button>
        } 
      </Flex>
    </>
  )
}
