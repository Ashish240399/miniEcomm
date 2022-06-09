import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Product from './components/Product';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/" element={<Product/>}></Route>
        <Route path="/user" element={<UserProfile/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
