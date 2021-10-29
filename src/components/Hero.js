import React from "react";
import profil from "../img/profil-img.jpg";

const Hero = () => {
    return (

        <section className="App-hero">

            <div className="main-profil">

                <picture>
                    <img src={profil} alt=""/>
                </picture>

                <div className="main-spitch">
                    <h2>Hello !</h2>
                    <p>Je m'appelle Christophe et j'ai 31 ans.</p>
                </div>

            </div>

        </section>

    )
}

export default Hero;