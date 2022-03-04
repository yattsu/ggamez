import { Platforms } from './Platforms';
import { Flex, Image, Text, Box, Link } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

export const GameCard = ({ data }) => {
  return(
    <Link
      href={`game/${data.slug}`}
      direction='column'
      minW='3xs'
      h='56'
      rounded='lg'
      overflow='hidden'
      shadow='lg'
      flex='20%'
      cursor='pointer'
      transition='.2s'
      _hover={{
        transform:'scale(1.02)',
        shadow:'3xl'
      }}
    >
      <Flex
        position='relative'
        h='full'
        w='full'
      >
        <Image
          src={data.background_image}
          objectFit='cover'
          w='full'
        />
        <Box
          _hover={{
            opacity:'0%'
          }}
          position='absolute'
          w='full'
          h='full'
          bgGradient='linear(35deg, rgba(9, 121, 117, .7), rgba(121, 9, 65, .7))'
          transition='.2s'
        />
        <Text
          position='absolute'
          bottom='2'
          left='3'
          fontSize='lg'
          textShadow='0px 0px 5px #111'
          color='gray.200'
          pointerEvents='none'
        >
          { data.name }
        </Text>
        <Platforms platforms={data.platforms} />
        <Text
          position='absolute'
          top='2'
          right='3'
          fontSize='sm'
          textShadow='0px 0px 5px #000'
          color='gray.200'
          pointerEvents='none'
        >
          <StarIcon
            color='gray.200'
            transform='translateY(-2px)'
            mr='1'
          />
          { data.rating }
        </Text>
      </Flex>
    </Link>
  )
}
