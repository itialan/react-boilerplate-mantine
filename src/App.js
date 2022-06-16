import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExchangeRate from './pages/ExchangeRate/ExchangeRate';
import MainLayout from './layouts/MainLayout/MainLayout';
import Backup from './pages/Backup/Backup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <MainLayout>
              <Backup />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
