import { useEffect, useState } from 'react';
import { Icon } from '@chakra-ui/react';
import { FaXbox, FaPlaystation, FaApple, FaWindows, FaAndroid, FaLinux } from 'react-icons/fa';

export const PlatformIcon = ({ platform }) => {
  const [icons, setIcons] = useState({});

  useEffect(() => {
    setIcons({
      'pc': FaWindows,
      'xbox': FaXbox,
      'playstation': FaPlaystation,
      'ios': FaApple,
      'android': FaAndroid,
      'linux': FaLinux
    })
  }, [])
  return(
    <>
    {
      icons[platform]
        ?
          <Icon as={icons[platform]}
            filter='drop-shadow(0px 0px 3px rgba(0, 0, 0, .7))'
          />
        :
          null
    }
    </>
  )
}
