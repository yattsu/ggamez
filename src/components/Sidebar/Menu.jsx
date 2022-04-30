import { useState, useEffect } from 'react';
import { Rawg } from '../../api';
import { Flex } from '@chakra-ui/react';
import { MenuButton } from './MenuButton';
import { MenuGenres } from './MenuGenres';
import { CategoryLabel } from './CategoryLabel';

export const Menu = ({ visible }) => {
  const [genres, setGenres] = useState(null);

  useEffect(() => {
    (async function() {
      const rawg = new Rawg();
      setGenres(await rawg.getGenres())
    })()
  }, [])

  if(!genres) {
    return 'Loading...'
  }

  return(
    <Flex
      maxH={[visible ? '500' : '0', visible ? '500' : '0', 'full']}
      overflowY={['scroll', 'scroll', 'visible']}
      bg={['gray.800', 'gray.800', 'transparent']}
      shadow={['2xl', '2xl', 'none']}
      display='flex'
      direction='column'
      w={['90%', '90%', 'full']}
      rounded={['xl', 'xl', 'none']}
      alignItems='center'
      mt={['0', '0', '5']}
      gap='2'
      pl='10%'
      pr='10%'
      py={[visible ? '5' : '0', visible ? '5' : '0', '0']}
      transition='.5s'
    >
      <MenuButton label='Home' href='/' />

      <CategoryLabel text='Browse' />
      <MenuGenres visible={visible} genres={genres} />
    </Flex>
  )
}
