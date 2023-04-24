import logo from './logo.svg';
import './App.css';
import Homepage from './page/Homepage';
import About from './page/About';
import ProductPage from './page/ProductPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProductDetailPage from './page/ProductDetailPage';
import Loginpage from './page/Loginpage';
import { useState } from 'react';
import Userpage from './page/Userpage';

function App() {
  const [authenticate, setAuthenticate]=useState(false);
  const PrivateRoute=()=>{//컴퍼넌트만들기기
    return authenticate == true ?<Userpage/>:<Navigate to="/login"/>
  }
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/productPage' element={<ProductPage/>} />
      <Route path='/productPage/:id' element={<ProductDetailPage/>} />
      <Route path='/login' element={<Loginpage/>}/>
      <Route path='/user' element={<PrivateRoute/>}/>

    </Routes>
    </>
  );
}

export default App;
