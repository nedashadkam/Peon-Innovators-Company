import './App.css';
import HomePage from './pages/homePage/homePage';
import Header from './components/header/header';
import WasteList from './pages/wasteList/wasteList';
import { BrowserRouter, Routes, Route, json } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/wasteList' element={<WasteList />} />
          <Route path='*' element={<h1> Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
