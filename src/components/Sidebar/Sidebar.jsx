import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Flex } from '@chakra-ui/react';
import { Logo } from '../Logo';
import { HamburgerButton } from './HamburgerButton';
import { Menu } from './Menu';

export const Sidebar = () => {
  const [menuVisible, setMenuVisible] = useState(isMobile ? false : true);

  const handleHamburgerClick = () => {
    setMenuVisible(menuVisible => !menuVisible);
  }

  return(
    <Flex
      position='relative'
      top='0'
      left='0'
      bg='gray.800'
      flex={['.2', '.2', '.4', '.4', '.2', '.2', '.2', '.2']}
      direction='column'
      alignItems='center'
      pt='5'
      pb='5'
    >
      <Flex
        position={['relative', 'relative', 'sticky']}
        direction='column'
        w='full'
        alignItems='center'
      >
        <Logo width={['52', '52', '32']} />
        {
          isMobile
            ?
              <HamburgerButton menuVisible={menuVisible} handleHamburgerClick={handleHamburgerClick} />
            :
            null
        }
        <Menu visible={menuVisible} />
      </Flex>
    </Flex>
  )
}
