import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import Backup from './pages/Backup/Backup';
import Products from './pages/Product/Products';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { AppProvider } from './context/AppContext';
import Spinner from './components/Spinner/Spinner';

function App() {
  return (
    <AppProvider>
      <MantineProvider>
        <NotificationsProvider
          autoClose={4000}
          position='top-center'
          zIndex={2077}
        >
          <BrowserRouter>
            <Routes>
              <Route path='/spinner' element={<Spinner />} />
              <Route
                path='/'
                element={
                  <MainLayout>
                    <Products />
                  </MainLayout>
                }
              />
            </Routes>
          </BrowserRouter>
        </NotificationsProvider>
      </MantineProvider>
    </AppProvider>
  );
}

export default App;
