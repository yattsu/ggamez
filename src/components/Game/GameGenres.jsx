import { Flex, Tag } from '@chakra-ui/react';

export const GameGenres = ({ genres }) => {
  return(
    <Flex
      gap='2'
      h='fit-content'
    >
      {
        genres.map(genre => (
          <Tag
            key={genre.name}
            variant='outline'
            size='md'
            py='0'
            px='3'
            rounded='full'
          >
            {genre.name}
          </Tag>
        ))
      }
    </Flex>
  )
}
