import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Home } from './components/Home/Home';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';

const App = () => {
  return(
    <BrowserRouter>
      <ChakraProvider>
        <Flex
          position='relative'
          direction={['column', 'column', 'row']}
          w='full'
          h='full'
          left='0'
          top='0'
          bg='gray.900'
          justify='center'
        >

          <Sidebar />

          <Flex
            direction='column'
            justify='center'
            alignItems='center'
            w='full'
            flex='1'
          >

            <Routes>
              <Route path='/' element={<MainContent />}>
                <Route path='/' element={<Home />} />
                <Route path='' element={<Footer />} />
              </Route>
            </Routes>

          </Flex>

        </Flex>

        <Footer />

      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App;
