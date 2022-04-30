import { Input } from '@chakra-ui/react';

export const SearchBar = () => {
  return(
    <Input
      rounded='full'
      border='none'
      bg='rgba(0, 0, 0, .2)'
      w={['full', 'full', '60%']}
      placeholder='Search game'
      mt={['5', '5', '0']}
    />
  )
}
