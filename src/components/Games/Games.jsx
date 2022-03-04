import { useEffect, useState } from 'react';
import { Rawg } from '../../api';
import { SkeletonCards } from './SkeletonCards';
import { GameCard } from '../GameCard/GameCard';

export const Games = () => {
  const [games, setGames] = useState(null);
  const rawg = new Rawg();
      console.log(games)

  useEffect(() => {
    (async function() {
      setGames(await rawg.getGames());
    })()
  }, [])

  return(
    <>
      {
        !games
          ?
            <SkeletonCards />
          :
            games.map(game => (
              <GameCard key={game.id} data={game} />
            ))
      }
    </>
  )
}
