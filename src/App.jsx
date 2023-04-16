import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import CreateProduct from './pages/CreateProduct';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  //const [message, setMessage] = useState("")
  
  const getCallback = (value) => {
    console.log(value);
  }

  return (
    <>
    <Nav callback={getCallback}/>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-product" element={<CreateProduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
    );
}

export default App
