import React from "react";
import img from "../assets/img.png";

const Travelers = () => {
  const travelers =[
    { 
      id :1,
      destination :'https://assets.traveltriangle.com/blog/wp-content/uploads/2018/01/paris.jpg',
      profile :'data:image/jpeg;base64,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',
      name: 'John Mathew',
      socialLink : '@johnMathew'

    },
    { 
      id :2,
      destination :'https://imadtravel.com/wp-content/uploads/2022/04/Amsterdam-Holland-Architecture-Netherlands-Europe-1-870x555.webp',
      profile :'https://static.wixstatic.com/media/7fa9fc_20b81982b5174c6087d2c12fc071058e~mv2.jpg/v1/fill/w_640,h_428,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7fa9fc_20b81982b5174c6087d2c12fc071058e~mv2.jpg',
      name: 'Sara',
      socialLink : '@sara'

    },
    { 
      id :3,
      destination :'https://assets-news.housing.com/news/wp-content/uploads/2022/10/07124006/Canada-tourist-places-to-visit-06.jpg',
      profile:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'Abhi',
      socialLink : '@abhi'

    },
    { 
      id :4,
      destination :'https://imadtravel.com/wp-content/uploads/2022/04/Amsterdam-Holland-Architecture-Netherlands-Europe-1-870x555.webp',
      profile :'https://static.wixstatic.com/media/7fa9fc_20b81982b5174c6087d2c12fc071058e~mv2.jpg/v1/fill/w_640,h_428,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7fa9fc_20b81982b5174c6087d2c12fc071058e~mv2.jpg',
      name: 'Sara',
      socialLink : '@sara'

    }
  ]
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top travelers of this month</h2>
        <div className="travelersContainer grid">

          {travelers.map((traveler)=>{
             return(
              <div className="singleTraveler">
              <img src={traveler.destination} className="destinationImage" />
  
              <div className="travelerDetails">
  
                <div className="travelerPicture">
                  <img src={traveler.profile} className="travelerImage"></img>
                </div>
                <div className="travelerName">
                  <span> {traveler.name} </span>
                  <p>{traveler.socialLink} </p>
                </div>
              </div>
            </div>
             )
          })}

          {/* <div className="singleTraveler">
            <img src={img} className="destinationImage" />

            <div className="travelerDetails">

              <div className="travelerPicture">
                <img src={img} className="travelerImage"></img>
              </div>
              <div className="travelerName">
                <span>Rameesa Jahan</span>
                <p> @rj</p>
              </div>
            </div>
          </div> */}


        </div>
      </div>
    </div>
  );
};

export default Travelers;
