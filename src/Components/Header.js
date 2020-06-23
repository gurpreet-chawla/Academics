import React from "react";
import {render} from "react-dom"
import {Link} from 'react-router-dom';
const Header = () => {
        return(
         <div>
              <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" id="home">
        <a class="navbar-brand">Info</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to="projects" class="nav-link" >Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item active">
              <a href="projects" class="nav-link" >Projects</a>
            </li>
            <li class="nav-item active">
              <a href="academics" class="nav-link" >Academics</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">Blogs</a>
            </li>
          </ul>
        </div>
      </nav> 
      </div>
    );
   };


export default Header;    
            
    

