import React from 'react';
import '../styles/Player.css';
import Footer from './player/Footer'
import Home from './player/Home'
import SideBar from './player/SideBar'

function Player() {
    return (
        <div className="player">
            <SideBar />
            <Home />
            <Footer />
        </div>
    )
}

export default Player
