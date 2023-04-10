import React from 'react';
import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Postrequest from './components/postrequest/postrequest';
import DonateBlood from './components/donateblood/donateblood';
import BloodBank from './components/bloodbank/bloodbank';
import Register from './components/register/register';
import Notification from './components/notification/notification';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/postrequest' element={<Postrequest/>}/>
        <Route path='/donateblood' element={<DonateBlood/>}/>
        <Route path='/bloodbank' element={<BloodBank/>}/>
        <Route path='/notification' element={<Notification/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
