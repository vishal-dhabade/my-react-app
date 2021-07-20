import { useState } from "react"

import {Link} from "react-router-dom"

var title="Vishal's Cake Gallery"

export function NavBar(){
  var [title,setTitle]=useState("Vishal's Cake Gallery")

  function demo(event){
    //event.preventDefault()
    //alert("hi")
    // var value=document.getElementById("search").value
    //   setTitle(value+" 's Cake Gallery")
  }

    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/Home" class="navbar-brand">{title}</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <Link to="/Login" class="nav-link" >Login</Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input id="search" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <Link to="/search"><button onClick={demo} class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></Link>
    </form>
  </div>
</nav>
    )
}