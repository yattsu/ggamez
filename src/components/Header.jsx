import { Flex, Image } from '@chakra-ui/react';
import Logo from '../media/logo.png';

export const Header = () => {
  return(
    <Flex
      w={['full', '80%']}
      justify='center'
      pt='16'
      pb='16'
      bg={['gray.800', 'transparent']}
    >
      <Image src={Logo} />
    </Flex>
  )
}
