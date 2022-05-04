import { Routes, Route } from 'react-router-dom';
import { HomeScreen } from './screens/home/home-screen';
import Mockman from 'mockman-js';
import { NavBar } from './components/common/navbar';
import { Footer } from './components/common/footer';
import { GlobalStyle } from './utils';
import { CssBaseline, GeistProvider } from '@geist-ui/core';
import {
  HistoryScreen,
  LikedVideosScreen,
  LoginScreen,
  PlayListsScreen,
  RegisterScreen,
  WatchLaterScreen,
} from './screens';
import { RequireAuth } from './components';

function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route
          path='/playlist'
          element={
            <RequireAuth>
              <PlayListsScreen />
            </RequireAuth>
          }
        />
        <Route
          path='/liked'
          element={
            <RequireAuth>
              <LikedVideosScreen />
            </RequireAuth>
          }
        />
        <Route
          path='/watchlater'
          element={
            <RequireAuth>
              <WatchLaterScreen />
            </RequireAuth>
          }
        />
        <Route
          path='/history'
          element={
            <RequireAuth>
              <HistoryScreen />
            </RequireAuth>
          }
        />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='mock' element={<Mockman />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
