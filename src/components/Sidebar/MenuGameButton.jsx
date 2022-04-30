import { useEffect, useState } from 'react';
import { Flex, Link, Icon } from '@chakra-ui/react';
import {
  GiFeatheredWing,
  GiCrosshair,
  GiFingerPrint,
  GiHandBandage,
  GiPerspectiveDiceOne,
  GiRelicBlade,
  GiRetroController,
  GiSteeringWheel,
  GiPuzzle,
  GiJoystick,
  GiLaddersPlatform,
  GiRaceCar,
  GiOrganigram,
  GiAmericanFootballHelmet,
  GiBoxingGlove,
  GiFamilyHouse,
  GiChessKnight,
  GiSecretBook,
  GiCardAceSpades,
} from 'react-icons/gi';

export const MenuGameButton = ({ label, slug, href }) => {
  const [icons, setIcons] = useState({})
  useEffect(() => {
    setIcons({
      action: GiRelicBlade,
      indie: GiFingerPrint,
      adventure: GiFeatheredWing,
      'role-playing-games-rpg': GiHandBandage,
      strategy: GiPerspectiveDiceOne,
      shooter: GiCrosshair,
      casual: GiRetroController,
      simulation: GiSteeringWheel,
      puzzle: GiPuzzle,
      arcade: GiJoystick,
      platformer: GiLaddersPlatform,
      racing: GiRaceCar,
      'massively-multiplayer': GiOrganigram,
      sports: GiAmericanFootballHelmet,
      fighting: GiBoxingGlove,
      family: GiFamilyHouse,
      'board-games': GiChessKnight,
      educational: GiSecretBook,
      card: GiCardAceSpades,
    })
  }, []);

  return(
      <Link href={ href }
        _hover={{
          bg:'gray.700'
        }}
        color='gray.100'
        fontSize='md'
        w='full'
        rounded='2xl'
        p='1'
        transition='.1s'
        cursor='pointer'
        justify='center'
      >
        <Flex
          direction='row'
          alignItems='center'
          justify='left'
          gap='2'
          w='full'
        >
          <Icon as={icons[slug]}
            bg='gray.700'
            p='2'
            h='8'
            w='auto'
            rounded='full'
          />
          { label }
        </Flex>
      </Link>
  )
}
