import React from 'react'
import '../components/Header.css'
const Header2 = () => {
  return (
    <div>
     <ul class="nav justify-content-center" style={{borderTop:'1px solid rgb(0 0 0 / 10%)'}}>
    <li class="nav-item">
      <a class="nav-link header2" aria-current="page" href="#">MEN</a>
    </li>
    <li class="nav-item">
      <a class="nav-link header2 mx-5" href="#">Women</a>
    </li>
    <li class="nav-item">
      <a class="nav-link header2" href="#">Accessories</a>
    </li>
    <li class="nav-item">
      <a class="nav-link header2 mx-5">Official Merch</a>
    </li>
    <li class="nav-item">
      <a class="nav-link header2" href="#">Bewakoof Air</a>
    </li>
    <li class="nav-item">
      <a class="nav-link header2 mx-5" href="#">Plus Size</a>
    </li>
    <li class="nav-item">
      <a class="nav-link header2">Teens</a>
    </li>
  </ul>
    </div>
   
  )
}

export default Header2
