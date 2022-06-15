import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExchangeRate from './pages/ExchangeRate/ExchangeRate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ExchangeRate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
