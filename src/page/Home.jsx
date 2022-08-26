import React from 'react';
import NavBar from '../components/Navbar/Navbar';

export const Home = () => {
  return (
    <div id="home" className="home">
      {/* <NavBar/> */}
      <div>
        <h4>SHE CODE AFRICA TECH SUMMIT 2022</h4>
        <h1>LARGEST GATHERING OF WOMEN IN <span className='pink' >TECH</span></h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga id magni veniam adipisci ad veritatis.</p>
        <span className="details">
          <h6>10TH OCTOBER, 2022</h6>
          <h6>CIVIC CENTER, LAGOS NIGERIA</h6>
        </span>
      </div>
    </div>
  )
}
