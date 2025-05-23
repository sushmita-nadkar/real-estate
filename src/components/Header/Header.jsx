import React from 'react'
import "./Header.scss"
const Header = () => {
  return (
    <div className='h-wrap'>
        <div className="flexCenter paddings innerWidth h-container">
            <img src="/my-app/public/header/logo.png" alt="logo" />

            <div className="flexCenter h-menu">
                <a href="">Residencies</a>
                <a href="">About Us</a>
                <a href="">Services</a>
                <a href="">Our Services</a>
                <a href="" className='button'>contact us</a>
            </div>
        </div>
    </div>
  )
}

export default Header