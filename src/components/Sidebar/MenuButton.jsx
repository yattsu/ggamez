import { Flex, Link } from '@chakra-ui/react';

export const MenuButton = ({ label, href }) => {
  return(
      <Link href={ href }
        _hover={{
          textDecoration:'none',
          color:'gray.400',
        }}
        textDecoration='none'
        color='gray.100'
        fontSize='2xl'
        w='full'
        rounded='md'
        transition='.1s'
        cursor='pointer'
        justify='center'
        verticalAlign='middle'
        fontWeight='bold'
      >
        <Flex
          direction='row'
          alignItems='center'
          justify={['center', 'center', 'left']}
          gap='2'
          w='full'
        >
          { label }
        </Flex>
      </Link>
  )
}
