import { Flex, Link, Box } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Games } from '../Games/Games';

export const GenreBrief = ({title, genres, limit, href }) => {
  return(
    <Flex
      direction='column'
      color='gray.100'
      gap='1'
    >
      <Link
        href={href}
        fontSize='3xl'
        w='fit-content'
      >
        <Flex
          _hover={{
            gap:'2'
          }}
          gap='0'
          alignItems='center'
          transition='.1s'
        >
          {title}
          <ChevronRightIcon />
        </Flex>
      </Link>
      <Games genres={genres} limit={limit} />
    </Flex>
  )
}
