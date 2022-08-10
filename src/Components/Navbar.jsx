import React from 'react'
import "./mystyle.css"
import { Link } from 'react-router-dom'
import pic from "../Components/p77.jpg"
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light background fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/"><img src={pic} className="img-responsive logo"></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item "> <Link className="nav-link text-light " to="/">Home</Link></li>
                            <li className="nav-item "> <Link className="nav-link text-light" to="#">About</Link></li>
                            <li className="nav-item "> <Link className="nav-link text-light" to="/shop/All/All/All">Shop</Link></li>
                            <li className="nav-item "> <Link className="nav-link text-light" to="/profile">Profile</Link></li>
                            <li className="nav-item "> <Link className="nav-link text-light" to="/login">Login</Link></li>
                            <li className="nav-item "> <Link className="nav-link text-light" to="/cart">Cart</Link></li>
                            <li className="nav-item "> <Link className="nav-link text-light" to="/contactUs">ContactUs</Link></li>


                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <br />
            <br />

        </>
    )
}