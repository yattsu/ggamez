import { Flex, Button } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

export const CarouselButtons = ({ handleButtonClick }) => {
  return(
    <Flex
      direction='row'
      position='absolute'
      pointerEvents='none'
      w='full'
      justify='space-between'
      alignSelf='center'
      p='2'
    >
      <Button
        onClick={() => handleButtonClick('l')}
        _hover={{
          opacity:'1'
        }}
        pointerEvents='all'
        rounded='full'
        w='10'
        h='10'
        color='gray.900'
        bg='gray.50'
        opacity='.5'
        transition='.4s'
        shadow='md'
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        onClick={() => handleButtonClick('r')}
        _hover={{
          opacity:'1'
        }}
        pointerEvents='all'
        rounded='full'
        w='10'
        h='10'
        color='gray.900'
        bg='gray.50'
        opacity='.5'
        transition='.4s'
        shadow='md'
      >
        <ChevronRightIcon />
      </Button>
    </Flex>
  )
}
