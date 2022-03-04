import { Outlet } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';

export const MainContent = () => {
  return(
    <Flex
      direction='row'
      justify='center'
      gap='5'
      flexWrap='wrap'
      p='5'
      bg='gray.800'
      shadow='xl'
      w={['full', 'full', '80%']}
      mb='10'
      rounded='sm'
    >
      <Outlet />
    </Flex>
  )
}
