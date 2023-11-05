import './App.css';
import MainForm from './components/form/mainForm/mainForm';
import Header from './components/header/Header';
import Pay from './components/form/pay/pay';
import React from "react";
import Title from './components/homeTitle/title';
import Timer from './components/timer/timer';
import Footer from './components/footer/footer';
import Reward from './components/reward/reward';
import Faq from './components/faq/Faq';
// import Solar from './components/mentor/solar/solar';
import Mentors from './components/mentor/mentors';
import { Route, Routes } from 'react-router';
import Sponsor from './components/sponsor2.0/sponsor';

function App() {
  
  const time = new Date();
  time.setSeconds(time.getSeconds() + 8);
  
  return (
        <div className='App'>
          <Routes>
              <Route exact path="/" element={
                <>
                  <Header/>
                  <Title />
                  <Timer expiryTimestamp={time}/>
                  <Reward/>
                  {/* <Solar/> */}
                  <Sponsor/>
                  <MainForm/>
                  <Pay/>
                  <Faq/>
                  <Footer/>
                </>
              }/>
              <Route path="sponser" element={<Mentors />} />
          </Routes>
        </div>
  
  );
}

export default App;
