import React from "react";
import "../../src/style.css"
function Nav() {
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src="https://cdn.pixabay.com/photo/2016/04/28/23/53/spotify-1360002_640.jpg" alt="Spotify Logo" />
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search an album" />
                </div>
                <div className="feedback-btn">
                    <button>Feedback</button>
                </div>
            </nav>
        </>
    );
}

export default Nav;
