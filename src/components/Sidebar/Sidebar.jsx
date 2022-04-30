import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Flex } from '@chakra-ui/react';
import { HamburgerButton } from './HamburgerButton';
import { Menu } from './Menu';

export const Sidebar = () => {
  const [menuVisible, setMenuVisible] = useState(isMobile ? false : true);

  const handleHamburgerClick = () => {
    setMenuVisible(menuVisible => !menuVisible);
  }

  return(
    <Flex
      position='sticky'
      top='0'
      bg='transparent'
      flex={['.2', '.2', '.4', '.4', '.2', '.2', '.2', '.2']}
      direction='column'
      alignItems='center'
      zIndex='20'
      h='full'
    >
      <Flex
        direction='column'
        w='full'
        alignItems='center'
      >
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
