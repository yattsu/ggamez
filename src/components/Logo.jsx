import { Image, Link } from '@chakra-ui/react';
import LogoImg from '../media/logo.png';

export const Logo = ({ width }) => {
  return(
    <Link href='/'
      w={width ? width : 'full'}
    >
      <Image src={LogoImg} />
    </Link>
  )
}
