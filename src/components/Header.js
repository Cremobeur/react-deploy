import React from "react";

const Header = () => {
    return (

        <header className="App-header">

            <div className="main-info">
                <h1>Christophe Rémy</h1>
                <p>Développeur Front-end</p>
            </div>

            <nav className="main-navigation">
                <ul>
                    <li><a href="./Header.js">About</a></li>
                    <li><a href="./Header.js">Skills</a></li>
                    <li><a href="./Header.js">Projects</a></li>
                    <li><a href="./Header.js">School</a></li>
                </ul>
            </nav>

        </header>

    )
}

export default Header;