import { Outlet } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';

export const MainContent = () => {
  return(
    <Flex
      direction='column'
      justify='center'
      alignItems='center'
      gap='5'
      flexWrap='wrap'
      bg='transparent'
      zIndex='10'
      w={['full', 'full', 'full']}
    >
      <Outlet />
    </Flex>
  )
}
