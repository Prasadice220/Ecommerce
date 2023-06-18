import React from "react";
import logo from "../../../images/logo.png";
import {Link} from "react-router-dom"
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { Nav } from 'react-adaptive-navbar';

const LINKS = [{
        display: "Empty",
        url: "/1",
    },
    {
        display: "List",
        url: "/2",
    },
    {
        display: "Failed",
        url: "/3",
    }];
const Header = () => {
  return (<div className="container">
            <nav class="navbar navbar-expand-lg bg-light position-fixed w-100 top-0 z-3 opacity-100">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link class="nav-link" to={'/'}><a class="nav-link" href="#"> Home </a></Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to={'/contact'}><a class="nav-link" href="#"> Contact </a></Link>
          
        </li>
        <li class="nav-item">
            <Link class="nav-link" to={'/products'}><a class="nav-link" href="#"> Products </a></Link>
          
        </li>
        <li class="nav-item">
            <Link class="nav-link" to={'/about'}><a class="nav-link" href="#"> About </a></Link>
          
        </li>
        <li class="nav-item">
            <Link class="nav-link" to={'/login'}><a class="nav-link" href="#"> Login </a></Link>
          
        </li>
        <li class="nav-item">
            <Link class="nav-link" to={'/cart'}><a class="nav-link" href="#"> Cart </a></Link>
          
        </li>
    
      </ul>
      <form class="d-flex" role="search">
      <Link class="nav-link" to={'/search'}><button class="btn btn-outline-success" type="submit">Search</button></Link>
        
      </form>
    </div>
  </div>
</nav>
   
        </div>)
};

export default Header;
