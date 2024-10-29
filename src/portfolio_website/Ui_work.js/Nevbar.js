import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import {Link , Outlet } from "react-router-dom"

export default function Nevbar() {
  return (
  <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <img src="logo.png" class=" ms-5 " style={{width:"100px"}}/> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse flex-row-reverse me-5" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link class="nav-link " to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link " to="/About">About</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link " to="/Resume">Resume</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link " to="/Portfolio">Portfolio</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link " to="/Blog">Blog</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link " to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div>
    <Outlet/>
</div>
  </>
  )
}
