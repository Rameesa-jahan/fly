import React from 'react';
import sky from "../assets/sky.mp4";
import aeroplane from "../assets/aeroplane.png";

const Home = () => {
  return (
    <div className='home flex container'>
      <div className="mainText">
        <h1> Create Ever Lasting Moments with us</h1>
      </div>

      <div className='homeImages flex'>
        <div className="vedioDiv">
          <video src={sky} autoPlay muted loop className='vedio' ></video>
        </div>

        <img src={aeroplane} className='plane' />
      </div>
    </div>
  )
}

export default Home
