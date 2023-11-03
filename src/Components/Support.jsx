import React from 'react';
import imagegrid from "../assets/imagegrid.png";

const Support = () => {
  return (
    <div className='support container section'>
      <div className="section container">
        <div className="tittlesDiv">
          <small>Travel Support</small>
          <h2>Plan your travel with confidence</h2>
          <p>Find help with booking and travel plans, see what to expect along the journey to your favorite destination</p>
        </div>

        <div className="infoDiv grid">
          <div className="textDiv">
            <div className="singleInfo">
              <span className='number'>01</span>
              <h4>Travel requirements for Dubai</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey to your favorite destination</p>
            </div>

            <div className="singleInfo">
              <span className='number colorOne'>02</span>
              <h4>Travel requirements for Dubai</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey to your favorite destination</p>
            </div>

            <div className="singleInfo">
              <span className='number colorTwo'>03</span>
              <h4>Travel requirements for Dubai</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey to your favorite destination</p>
            </div>
          </div>

          <div className="imgDiv">
            <img className='image-support' src={imagegrid} alt="Support Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
