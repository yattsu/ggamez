import { Box } from '@chakra-ui/react';

export const GameBackground = ({ imageUrl }) => {
  return(
    <>
      <Box
        bgImage={imageUrl}
        position='absolute'
        top='0'
        left='0'
        bgSize='cover'
        bgRepeat='no-repeat'
        bgPos='center top'
        w='full'
        h='lg'
        maxH='lg'
        opacity='.2'
      >
        <Box
          w='full'
          h='full'
          bgGradient='linear(to-t, gray.800, transparent)'
        />
      </Box>
    </>
  )
}
