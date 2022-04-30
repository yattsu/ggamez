import { Tag } from '@chakra-ui/react';

export const GameEsrbRating = ({ esrbRating }) => {
  if(!esrbRating) {
    return null;
  }

  return(
    <Tag
      variant='outline'
      size='md'
      py='0'
      px='3'
      rounded='full'
    >
      {esrbRating.name}
    </Tag>
  )
}
