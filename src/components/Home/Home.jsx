import { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import { Rawg } from '../../api';
import { Carousel } from '../Carousel/Carousel';
import { Games } from '../Games/Games';

export const Home = () => {
  const [carouselGames, setCarouselGames] = useState([]);

  useEffect(() => {
    (async function() {
      const rawg = new Rawg();
    console.log(await rawg.getGenres())
      setCarouselGames(await rawg.getGames(10, 'released'))
    })()

  }, [])

  return(
    <Flex
      direction='column'
      gap='5'
    >
      <Carousel games={carouselGames} />
      <Games />
    </Flex>
  )
}
