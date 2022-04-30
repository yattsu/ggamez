import { useEffect, useState } from 'react';
import { Rawg } from '../../api';
import { Flex } from '@chakra-ui/react';
import { SkeletonCards } from './SkeletonCards';
import { GameCard } from '../GameCard/GameCard';

export const Games = ({ genres, limit, page, ordering, lastPage}) => {
  const [games, setGames] = useState(null);

  useEffect(() => {
    (async function() {
      setGames(await getGames(1))
    })()
  }, [])

  useEffect(() => {
    if(!games) {
      return
    }
    (async function() {
      await loadMore();
    })()
  }, [lastPage])

  const getGames = async (page) => {
    const rawg = new Rawg();
    return await rawg.getGames(genres, limit, page, ordering);
  }

  const loadMore = async () => {
    const newGames = await getGames(lastPage);
    setGames([...games, ...newGames])
  }

  return(
    <Flex
      direction='row'
      flexWrap='wrap'
      gap='5'
      bg='gray.900'
      p='3'
      rounded='2xl'
      shadow='xl'
      zIndex='10'
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
