import { Flex } from '@chakra-ui/react';
import { MenuButton } from './MenuButton';
import { MenuGameButton } from './MenuGameButton';
import { CategoryLabel } from './CategoryLabel';

export const Menu = ({ visible }) => {
  return(
    <Flex
      display={visible ? 'flex' : 'none'}
      direction='column'
      w='full'
      alignItems='center'
      mt='16'
      gap='2'
      pl='10%'
      pr='10%'
    >
      <MenuButton label='Home' href='/' />
      <MenuButton label='About' href='about' />

      <CategoryLabel text='Browse' />
      <MenuGameButton icon='GiBroadsword' label='Action' href='/' />
      <MenuGameButton icon='GiCrosshair' label='Shooter' href='/' />
      <MenuGameButton icon='GiEarthAfricaEurope' label='MMO' href='/' />

      <CategoryLabel text='New Releases' />
    </Flex>
  )
}
