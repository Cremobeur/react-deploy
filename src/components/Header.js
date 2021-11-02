import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
    return (

        <header className="App-header">

            <div className="main-info">
                <h1>Christophe Rémy</h1>
            </div>

            <nav className="main-navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Skill">Skills</Link></li>
                    <li><Link to="/Work">Works</Link></li>
                </ul>
            </nav>

        </header>

    )
}

export default Header;