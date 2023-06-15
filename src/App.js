import './App.css';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Calculator from './components/calculator';
import DisplayQuote from './components/displayQuote';
import Home from './components/Home';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/math-magicians" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<DisplayQuote />} />
          <Route path="*" element={<h1>page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
