import { useState } from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  const [message, setMessage] = useState("")
  
  const getCallback = (value) => {
    console.log(value);
  }
  return (
    <>
    <Nav callback={getCallback}/>
    <p>Hello world! {message}</p>

    <Footer />
    </>
    );
}

export default App
