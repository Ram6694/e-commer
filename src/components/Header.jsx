import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import Login from './buttons/Login'
import Signup from './buttons/Signup'
import '../components/Header.css'
import {GoSearch} from 'react-icons/go'
import {BsHeart,BsBag} from 'react-icons/bs'
import Header2 from './Header2'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    <div>
                    <img src='https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg' style={{height:'20px'}}/>
                    </div>
                 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav my-2 m-5 mb-3 mb-lg-0 me-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link men" aria-current="page" to="/">MEN</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link men" to="/products">WOMEN</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link men" to="/about">MOBILE COVERS</NavLink>
                            </li>
                        </ul>

                     
                        <div className="input-group me-5" style={{width:'30%',borderRadius:'5px',height:'6vh',backgroundColor:'#eaeaea'}}>
                        <span class="input-group-text" id="basic-addon1" style={{border:'none',color:'rgb(0 0 0 / 50%)',backgroundColor:'none'}}><GoSearch/></span>
                       <input type="text" className="form-control" placeholder="Search by product, category or  collection" aria-label="Search by product, category or collection" aria-describedby="basic-addon1" 
                       style={{
                        fontSize:'12px',
                        borderLeft:'none',
                        backgroundColor:'#eaeaea',
                        border:'none'
                         }}
                         />
                        </div>
                        <div className='vl'></div>
                    
                         <span className='men'>Login</span>

                         <span className='men mx-2'><BsHeart/></span>

                         <span className='men'><BsBag/></span>
                    
                    {/* <Login/>
                    <Signup/>
                    <CartBtn/> */}
                    </div>
                </div>
            </nav>
            <Header2/>
        </>
    )
}

export default Header
