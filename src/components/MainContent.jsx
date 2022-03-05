import { Outlet } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';

export const MainContent = () => {
  return(
    <Flex
      direction='column'
      justify='center'
      gap='5'
      flexWrap='wrap'
      p='5'
      bg='gray.800'
      zIndex='10'
      w={['full', 'full', 'full']}
    >
      <Outlet />
    </Flex>
  )
}
