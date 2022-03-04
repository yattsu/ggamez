import { Box } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

export const HamburgerButton = ({ menuVisible, handleHamburgerClick }) => {
  return(
    <Box onClick={handleHamburgerClick}
      p='2'
      cursor='pointer'
      w='full'
      mt='10'
    >
      {
        menuVisible
          ?
            <CloseIcon
              color='gray.100'
              w='full'
              fontSize='2xl'
            />
          :
            <HamburgerIcon
              color='gray.100'
              w='full'
              fontSize='3xl'
            />
      }
    </Box>
  )
}
