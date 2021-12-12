import React from 'react'
import './Header.css'
import logo from './reactjs-logo.svg'

function Header() {
    return (
        <div className="header flex flex-space-between flex-align-center">
            <div className="flex flex-align-center">
                <div className="logo">
                    <img src={logo} alt="React Logo" />
                </div>
                <div className="company-name">ReactFacts</div>
            </div>
            <div className="project"><a href="https://github.com/">React Course - Project 1</a></div>
        </div>
    )
}

export default Header;