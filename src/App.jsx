import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Games } from './components/Games/Games';
import { Footer } from './components/Footer';

const App = () => {
  return(
    <BrowserRouter>
      <ChakraProvider>
        <Flex
          position='relative'
          direction='column'
          w='full'
          h='full'
          left='0'
          top='0'
          bg='gray.900'
          justify='center'
          alignItems='center'
        >

          <Header />

          <Routes>
            <Route path='/' element={<MainContent />}>
              <Route path='/' element={<Games />} />
              <Route path='/test' element={<Footer />} />
            </Route>
          </Routes>

          <Footer />

        </Flex>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App;
