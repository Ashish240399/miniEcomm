import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Product from './components/Product';
import UserProfile from './components/UserProfile';
import Category from './components/Category';
import Brand from './components/Brand';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/user" element={<UserProfile/>}></Route>
        <Route path="/category" element={<Category/>}></Route>
        <Route path="/brand" element={<Brand/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
