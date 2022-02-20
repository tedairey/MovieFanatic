import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import popcornImage from '../Images/popcorn.png'
import './Header.sass'

const Header = () => {

    const [sideMenuOpen, setSideMenuOpen] = useState(false)
    const navigate = useNavigate()

    const goHome = () => {
        setSideMenuOpen(false)
        navigate("/");
    }

    const goToActors = () => {
        setSideMenuOpen(false)
        navigate("/actors")
    }
    
    const goToUpcoming = () => {
        setSideMenuOpen(false)
        navigate("/upcoming")
    }

    return (
        <header className="app-header">
            <h1 className='app-title'>
                <button className="empty-button" onClick={() => setSideMenuOpen(!sideMenuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>
                <img className='popcorn-icon' src={popcornImage} alt="home-icon"/>
                Movie Fanatic
            </h1>
            <nav className={`header-nav ${sideMenuOpen ? 'open' : ''}`}>
                <button className='nav-button' onClick={goHome}>
                    Home
                </button>
                <button className='nav-button' onClick={goToUpcoming}>
                    Upcoming
                </button>
                <button className='nav-button' onClick={goToActors}>
                    Actors
                </button>
            </nav>
        </header>
    )
}

export default Header;