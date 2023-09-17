import { useState } from "react";
import logo from "./Picture1.jpg";
import searchLogo from "./search_logo.svg"

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt='logo'/>
      <p>crafto</p>
    </div>
  );
}
function Search() {
  useState
  return (
      <button className="search" onClick={() =>{

      }}><img src={searchLogo} alt="search"/></button>
  );
}

export default function Navbar() {
  return (
    <div className="navbar">
    <Logo/>
      <Search/>
    </div>
    
  )
};
