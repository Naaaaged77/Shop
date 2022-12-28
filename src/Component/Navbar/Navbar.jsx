import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  let token = localStorage.getItem("tkn");
  let navigate =useNavigate();
  // console.log(token);
  function logout(){
    localStorage.clear();
    navigate("/home");
  }

  return <>
  
  <nav className="navbar navbar-expand-lg bg-light fixed-top">
  <div className="container">
    <Link className="navbar-brand" to="/"><i className="fa-solid fa-shop"></i> Konturshop</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link textextra fs-4" aria-current="page" to="home">Home </Link>
        </li>
        
       
        
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {token?<>
          <li className="nav-item">
          <span className="nav-link textextra fs-4" onClick={logout} >logout</span>
        </li>
        </>:<>
        <li className="nav-item">
          <Link className="nav-link textextra fs-4" aria-current="page" to="login">Login </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link textextra fs-4" to="register">SignUp</Link>
        </li>
        </>}
        
        
        <li className="nav-item">
          <Link className="nav-link textextra fs-4" to="about">About</Link>
        </li>
       
        
      </ul>
      
    </div>
  </div>
</nav>
  </>
}
