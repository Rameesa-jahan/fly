import React from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import logo from "../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  
  const [ active , setActive ] = useState('navBarMenu');
  const showNavBar = () =>{
    setActive('navBarMenu showNavBar')
  }
  const hideNavBar = () =>{
    setActive('navBarMenu')
  }
  
  const [ noBg , addBg ] = useState('navBarMenu');
  const addBgColor = () =>{
    if(window.scrollY >= 10){
      addBg('navBarTwo navbar_With_Bg')
    } else{
      addBg('navBarTwo')
    }
  }

  window.addEventListener( 'scroll', addBgColor)

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SiConsul className="icon" />
        </div>

        <div className="none flex">
          <li className="flex">
            {" "}
            <BsPhoneVibrate className="icon" /> Support{" "}
          </li>
          <li className="flex">
            {" "}
            <AiOutlineGlobal className="icon" /> Language
          </li>
        </div>

        <div class="atb-flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>

      <div className={noBg}>

        <div className="logoDiv">
          <img className="Logo" src={logo} alt="logo"></img>
        </div>

        <div className={active}>
          <ul className="menu flex">
            <li onClick={hideNavBar} className="listItem"> Home </li>
            <li onClick={hideNavBar}  className="listItem"> About </li>
            <li onClick={hideNavBar}  className="listItem"> Offers </li>
            <li onClick={hideNavBar}  className="listItem"> Seats </li>
            <li className="listItem"> Destination </li>
          </ul>

          <button className="btn flex btnOne"> Contact </button>
        </div>
        <button className="btn flex btnTwo"> Contact </button>
         
         <div onClick={showNavBar} className="toggleIcon">
           <CgMenuGridO className="icon"/>
         </div>

      </div>
    </div>
  );
};

export default Navbar;
