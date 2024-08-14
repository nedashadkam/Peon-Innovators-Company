import './App.css';
import HomePage from './pages/homePage/homePage';
import { BrowserRouter, Routes, Route, json } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='' element='<h1>hello </h1>' />
          <Route path='*' element='<h1>404</h1>' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
