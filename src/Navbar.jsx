import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (

    <div class="container-fluid" >
        <div className='row'>
            <div className='col-10 mx-auto'>

          
            <nav class="navbar navbar-expand-lg navbar-light ">  
            <Link class="nav navbar-brand ml-2" to="/"> React User</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0"> 
            {/* me se ml karane par icon left me jayega su osm */}

                <li class="nav-item">
                <Link class="nav-link active" activeClassName = "menu_active" aria-current="page" to="/">Home</Link>
                </li>

                <li class="nav-item">
                <Link class="nav-link " ctiveClassName = "menu_active" to="/service">Service</Link>
                </li>

                <li class="nav-item">
                <Link class="nav-link" activeClassName = "menu_active"  to="/about">About</Link>
                </li>

                <li class="nav-item">
                <Link class="nav-link" ctiveClassName = "menu_active" to="/contact">Contact</Link>
                </li>

            </ul>
            </div>
        </nav>
          </div>
        </div>
    </div>
  )
}

export default Navbar