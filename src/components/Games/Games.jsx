import { useEffect, useState } from 'react';
import { Rawg } from '../../api';
import { Flex } from '@chakra-ui/react';
import { SkeletonCards } from './SkeletonCards';
import { GameCard } from '../GameCard/GameCard';

export const Games = () => {
  const [games, setGames] = useState(null);
      console.log(games)

  useEffect(() => {
    (async function() {
      const rawg = new Rawg();
      setGames(await rawg.getGames(10));
    })()
  }, [])

  return(
    <Flex
      direction='row'
      flexWrap='wrap'
      gap='5'
    >
      {
        !games
          ?
            <SkeletonCards />
          :
            games.map(game => (
              <GameCard key={game.id} data={game} />
            ))
      }
    </Flex>
  )
}
