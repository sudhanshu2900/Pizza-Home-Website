import './App.css';
import {Routes, Route} from 'react-router-dom';
import Menu from './Menu.js'
import ShoppingCart from './ShoppingCart';
import LandingPage from './LandingPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage/>} />
      <Route exact path="/menu" element={<Menu/>} />
      <Route path="/cart" element={<ShoppingCart/>} />
    </Routes>
  );
}

export default App;
