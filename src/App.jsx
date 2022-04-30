import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { NavBar } from './components/NavBar/NavBar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Home } from './components/Home/Home';
import { MainContent } from './components/MainContent';
import { Genre } from './components/Genre/Genre';
import { Game } from './components/Game/Game';
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
          bg='gray.800'
          justify='center'
        >
          <NavBar />
          <Flex
            direction={['column', 'column', 'row']}
          >

            <Sidebar />

            <Flex
              direction='column'
              alignItems='center'
              w='full'
              flex='1'
            >

              <Routes>
                <Route path='/' element={<MainContent />}>
                  <Route path='/' element={<Home />} />
                  <Route path='/genre/:genreSlug' element={<Genre />} />
                  <Route path='/game/:gameSlug' element={<Game />} />
                  <Route path='' element={<Footer />} />
                </Route>
              </Routes>

            </Flex>

          </Flex>
        </Flex>

        <Footer />

      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App;
