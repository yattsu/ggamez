import { useState, useEffect } from 'react';
import { Flex, Image, Box, Text, Link, Skeleton } from '@chakra-ui/react';
import { Platforms } from '../GameCard/Platforms';
import { CarouselButtons } from './CarouselButtons';

export const Carousel = ({ games }) => {
  const [currentGame, setCurrentGame] = useState(null);
  const [intervalContainer, setIntervalContainer] = useState(null);

  useEffect(() => {
    if(!currentGame) {
      return
    }

    setIntervalContainer(null);
    clearInterval(intervalContainer);
    setIntervalContainer(setInterval(increaseSlide, 10000));
  }, [currentGame])

  useEffect(() => {
    setCurrentGame(games[0])
  }, [games])

  const handleButtonClick = (direction) => {
    if(direction === 'r') {
      increaseSlide()
    } else {
      decreaseSlide()
    }
  }
  
  const increaseSlide = () => {
      setCurrentGame(games.indexOf(currentGame) === games.length - 1 ? games[0] : games[games.indexOf(currentGame) + 1])
  }

  const decreaseSlide = () => {
      setCurrentGame(games.indexOf(currentGame) === 0 ? games[games.length - 1] : games[games.indexOf(currentGame) - 1])
  }

  return(
    <Flex
      position='relative'
      direction='row'
      justify='center'
      h={['48', '2xs', '3xs', '2xs', 'xs', 'xl']}
      rounded='lg'
      overflow='hidden'
    >
      {
        !currentGame
          ?
            <Skeleton
              w='full'
              h={['48', '2xs', '3xs', '2xs', 'xs', 'xl']}
            />
          :
          <>
            <Link href={`game/${currentGame.slug}`}>
              <Image src={currentGame.background_image}
                objectFit='cover'
                w='full'
              />
            </Link>
            <Box
              pointerEvents='none'
              position='absolute'
              w='full'
              h='full'
              bgGradient='linear(to-t, rgba(0, 0, 0, .7), transparent)'
            />
            <Platforms platforms={currentGame.platforms} />
            <Text
              position='absolute'
              bottom='3'
              left='5'
              fontSize='3xl'
              textShadow='0px 0px 5px #000'
              color='gray.200'
              pointerEvents='none'
            >
              {currentGame.name}
            </Text>
            <CarouselButtons handleButtonClick={handleButtonClick} />
          </>
      }
    </Flex>
  )
}
