import { Flex } from '@chakra-ui/react';
import { Logo } from '../Logo';
import { SearchBar } from './SearchBar';

export const NavBar = () => {
  return (
    <Flex
      direction={['column', 'column', 'row']}
      alignItems='center'
      justify='space-between'
      bg='transparent'
      px='5'
      py='8'
      zIndex='20'
    >
      <Logo width='32' />
      <Flex />
    </Flex>
  )
}
