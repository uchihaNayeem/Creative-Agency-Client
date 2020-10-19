import React from 'react';
import logo from '../../../images/logos/logo.png'
import './navbar.css'

const Navbar = () => {
  return (
    <nav style={{backgroundColor: '#FBD062'}} class="navbar navbar-expand-lg navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
                <img className='logo-size' src={logo} alt=""/>

            <div class="collapse navbar-collapse m-5" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item ">
                    <a class="nav-link mr-5" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link mr-5" href="#">Our Portfolio</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link mr-5" href="#">Our Team</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link mr-5 " href="#">Contact Us</a>
                    </li>

                    <button class="btn btn-dark">Login</button>
                
                </ul>
            
            </div>
</nav>
  );
};

export default Navbar;