import { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import { PlatformIcon } from '../PlatformIcon';

export const Platforms = ({ platforms }) => {
  const [uniquePlatforms, setUniquePlatforms] = useState([]);

  useEffect(() => {
    const eligiblePlatforms = ['xbox', 'pc', 'playstation', 'vita', 'ios', 'android', 'switch', 'linux'];
    const uniquePlatformsTemp = []

    platforms.map(p => {
      eligiblePlatforms.map(e => {
        if(p.platform.slug.includes(e) && !uniquePlatformsTemp.includes(e)) {
          uniquePlatformsTemp.push(e)
        }
      })
    })

    setUniquePlatforms(uniquePlatformsTemp)
  }, []);

  return(
    <Flex
      position='absolute'
      top='3'
      left='3'
      color='gray.200'
      gap='1'
      pointerEvents='none'
    >
    {
      uniquePlatforms.map(platform => (
        <PlatformIcon platform={platform} />
      ))
    }
    </Flex>
  )
}
