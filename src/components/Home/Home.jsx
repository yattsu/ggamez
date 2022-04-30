import { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import { Rawg } from '../../api';
import { GameBackground } from '../Game/GameBackground';
import homeBackgroundImage from '../../media/home_background.jpg';
import { SectionTitle } from '../SectionTitle';
import { Carousel } from '../Carousel/Carousel';
import { GenreBrief } from './GenreBrief';

export const Home = () => {
  const [carouselGames, setCarouselGames] = useState([]);
  const [carouselGenre, setCarouselGenre] = useState(null);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    (async function() {
      const rawg = new Rawg();
      if(genres.length === 0) {
        setGenres(await rawg.getGenres())
      } else {
        setCarouselGames(await rawg.getGames(carouselGenre.slug, 10, 1, 'released'))
      }
    })()
  }, [carouselGenre])

  useEffect(() => {
    if(genres.length === 0) {
      return
    }
    setCarouselGenre(genres[Math.floor(Math.random() * genres.length)])
  }, [genres]);

  return(
    <Flex
      direction='column'
      gap='10'
      p='5'
    >
      <GameBackground imageUrl={homeBackgroundImage} />

      {
        carouselGenre
          ?
            <>
              <SectionTitle text={`Latest ${carouselGenre.name} Games`} />
              <Carousel games={carouselGames} />
            </>
          :
            null
      }
      <GenreBrief title='Action' genres='action' limit='7' href='genre/action' />
      <GenreBrief title='MMO' genres='massively-multiplayer' limit='9' href='genre/massively-multiplayer' />
      <GenreBrief title='Shooters' genres='shooter' limit='5' href='genre/shooter' />
      <GenreBrief title='Adventure' genres='adventure' limit='12' href='genre/adventure' />
      <GenreBrief title='Strategy' genres='strategy' limit='4' href='genre/strategy' />
      <GenreBrief title='RPG' genres='role-playing-games-rpg' limit='10' href='genre/role-playing-games-rpg' />
      <GenreBrief title='Sports' genres='sports' limit='5' href='genre/sports' />
      <GenreBrief title='Board' genres='board-games' limit='3' href='genre/board-games' />
    </Flex>
  )
}
