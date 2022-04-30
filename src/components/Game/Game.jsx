import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Flex, Box, Heading } from '@chakra-ui/react';
import { Rawg } from '../../api';
import { GameBackground } from './GameBackground';
import { GameGenres } from './GameGenres';
import { GameEsrbRating } from './GameEsrbRating';
import { GameRatings } from './GameRatings';
import { GameMetacritic } from './GameMetacritic';
import { GameDescription } from './GameDescription';
import { GamePlatforms } from './GamePlatforms';
import { GamePublishers } from './GamePublishers';
import { GameReleased } from './GameReleased';

export const Game = () => {
  const [gameSlug, setGameSlug] = useState(null);
  const [data, setData] = useState(null);
  const params = useParams();
  console.log(data)

  useEffect(() => {
    setGameSlug(params.gameSlug);
  }, [])

  useEffect(() => {
    if(!gameSlug) {
      return
    }

    (async function() {
      const rawg = new Rawg();
      setData(await rawg.getGame(gameSlug));
    })()
  }, [gameSlug]);

  if(!data) {
    return 'Loading...'
  }

  return(
    <Flex
      direction='column'
      py='10'
      px='5'
    >
      <GameBackground imageUrl={data.background_image} />
      <Heading
        as='h2'
        size='3xl'
        bottom='5'
        left='5'
        color='gray.50'
        textShadow='0px 0px 15px #000'
        mb='8'
      >
        {data.name_original}
      </Heading>
      <Flex
        direction={['column', 'column', 'row']}
        color='gray.400'
        gap='16'
        zIndex='10'

      >
        <Box
          flex='1'
        >
          <Flex
            justify='space-between'
            alignItems='center'
          >
            <GameGenres genres={data.genres} />
            <GameEsrbRating esrbRating={data.esrb_rating} />
          </Flex>
          <GameRatings ratings={data.ratings} />
          <Flex
            justify='space-evenly'
          >
            <GameMetacritic score={data.metacritic} />
          </Flex>
          <GameDescription text={data.description_raw} />
        </Box>
        <Flex
          direction='column'
          flex='.4'
          gap='2'
          h='fit-content'
        >
          <GamePublishers publishers={data.publishers} />
          <GamePlatforms platforms={data.platforms} />
          <GameReleased released={data.released} />
        </Flex>
      </Flex>
    </Flex>
  )
}
