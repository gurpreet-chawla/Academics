import React from 'react';
import './Menu.css';

import { Link } from 'react-router-dom';

const Menu = () =>{

 return(
  <div>
   <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" >
   <Link class="navbar-brand">Info</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
   <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
       <li class="nav-item active" id="menuspace"> <Link to="" className="rang">  Home </Link> </li>
       <li class="nav-item active" id="menuspace"> <Link to="Academics" className="rang"> Academics </Link> </li>
       <li class="nav-item active" id="menuspace"> <Link to="Projects" className="rang"> Projects </Link> </li>
       
    </ul>
    </div>
   
   </nav>
  </div>
 )

} 

export default Menu;