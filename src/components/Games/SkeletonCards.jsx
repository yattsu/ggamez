import { Skeleton } from '@chakra-ui/react';

export const SkeletonCards = () => {
  const amount = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], ];
  return(
    <>
    {
      amount.map(i => (
      <Skeleton
      minW='3xs'
      h='56'
        rounded='lg'
        overflow='hidden'
        shadow='lg'
        flex='15%'
      />

      ))
      }
    </>
  )
}
