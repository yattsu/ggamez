import { useEffect, useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { Rawg } from '../../api';
import { SectionTitle } from '../SectionTitle';
import { Games } from '../Games/Games';

export const Genre = () => {
  const [genreSlug, setGenreSlug] = useState(null);
  const [genreName, setGenreName] = useState(null);
  const [genres, setGenres] = useState(null);
  const [lastPage, setLastPage] = useState(1);
  const params = useParams();

  useEffect(() => {
    setGenreSlug(params.genreSlug);
  }, [])

  useEffect(() => {
    if(!genreSlug) {
      return
    }

    (async function() {
      const rawg = new Rawg();
      setGenres(await rawg.getGenres());
    })()
  }, [genreSlug])

  useEffect(() => {
    if(!genres || !genreSlug) {
      return
    }

    setGenreName(genres.filter(genre => genre.slug === genreSlug)[0].name)
  }, [genres, genreSlug])

  const handleLoadMoreClick = () => {
    setLastPage(lastPage => lastPage + 1)
  }

  if(!genreSlug || !genreName) {
    return 'Loading...';
  }
  
  return(
    <Box
      p='5'
      textAlign='center'
    >
      <SectionTitle text={`${genreName} Games`} />
      <Games genres={genreSlug} limit='50' lastPage={lastPage} />
      <Button
        onClick={handleLoadMoreClick}
        _hover={{
          bg:'gray.600'
        }}
        bg='gray.700'
        color='gray.300'
        w='fit-content'
        mt='5'
      >
        Load more
      </Button>
    </Box>
  )
}
