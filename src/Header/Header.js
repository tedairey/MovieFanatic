import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.scss'

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

    return (
        <header className="App-header">
            <h1>
                <button className="empty-button" onClick={() => setSideMenuOpen(!sideMenuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>
                Movie Fanatic
            </h1>
            <nav className={`header-nav ${sideMenuOpen ? 'open' : ''}`}>
                <button className='nav-button' onClick={goHome}>
                    Home
                </button>
                <button className='nav-button'>
                    Your Movies
                </button>
                <button className='nav-button' onClick={goToActors}>
                    Actors
                </button>
                <button className='nav-button'>
                    New Releases
                </button>
            </nav>
        </header>
    )
}

export default Header;