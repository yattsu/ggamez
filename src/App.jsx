import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { MainContent } from './components/MainContent';
import { Games } from './components/Games/Games';
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
                <Route path='/' element={<Games />} />
                <Route path='/test' element={<Footer />} />
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
