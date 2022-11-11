import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';

function App() {
  const[authenticate, setAuthenticate] = useState(false) //true면 로그인, false면 로그인 안됨.
  useEffect(() => {
    console.log('aaa', authenticate)
  }, [authenticate])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductAll/>}/>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
