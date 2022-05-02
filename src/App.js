import { Routes, Route } from 'react-router-dom';
import { HomeScreen } from './screens';
import Mockman from 'mockman-js';
import { NavBar } from './components/common/navbar';
import { Footer } from './components/common/footer';
import { GlobalStyle } from './utils';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='mock' element={<Mockman />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
