import React from 'react'
import img from "../assets/img.png";

const Lounge = () => {
  return (
    <div className='lounge container section'>
      <div className="sectionContainer grid">

        <div className="imgDiv">
          <img src={img} />
        </div>

        <div className="textDiv">
          <h2> Unaccompanied minor lounge</h2>
        </div>
        
        <div className="grids grid">

          <div className="singleGrid">
            <span className='gridTitle'>
              Help through the airpot
            </span>
            <p> You can also call airlines from your
               phone and book a flight ticket </p>
          </div>

          <div className="singleGrid">
            <span className='gridTitle'>
              Help through the airpot
            </span>
            <p> You can also call airlines from your
               phone and book a flight ticket </p>
          </div>

          <div className="singleGrid">
            <span className='gridTitle'>
              Help through the airpot
            </span>
            <p> You can also call airlines from your
               phone and book a flight ticket </p>
          </div>

          <div className="singleGrid">
            <span className='gridTitle'>
              Help through the airpot
            </span>
            <p> You can also call airlines from your
               phone and book a flight ticket </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Lounge
