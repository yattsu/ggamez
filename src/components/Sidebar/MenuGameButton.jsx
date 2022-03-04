import { useEffect, useState } from 'react';
import { Flex, Link, Icon } from '@chakra-ui/react';
import { GiAndroidMask, GiBroadsword, GiEarthAfricaEurope, GiCrosshair } from 'react-icons/gi';

export const MenuGameButton = ({ icon, label, href }) => {
  const [icons, setIcons] = useState({})
  useEffect(() => {
    setIcons({
      GiAndroidMask,
      GiBroadsword,
      GiEarthAfricaEurope,
      GiCrosshair
    })
  }, []);

  return(
      <Link href={ href }
        _hover={{
          bg:'gray.700'
        }}
        color='gray.100'
        fontSize='md'
        w='full'
        rounded='md'
        p='1'
        transition='.1s'
        cursor='pointer'
        justify='center'
        verticalAlign='middle'
      >
        <Flex
          direction='row'
          alignItems='center'
          justify='left'
          gap='2'
          w='full'
        >
          <Icon as={icons[icon]}
            bg='gray.700'
            p='2'
            h='full'
            w='auto'
            rounded='lg'
          />
          { label }
        </Flex>
      </Link>
  )
}
