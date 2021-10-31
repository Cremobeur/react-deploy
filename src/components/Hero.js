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
                    <h2>Christophe Rémy</h2>
                    <p>Développeur Front-web</p>
                </div>

            </div>

            <div className="main-about">

                <h3>About</h3>

                <p>Bonjour, je m'appelle Christophe et j'ai 31 ans. Je suis passionné par le développement web depuis longtemps, j'ai donc décidé d'entreprendre une reconversion professionelle.

                    J'ai pu mener mon projet avec succès et je suis maintenant déterminé à trouver ma première expérience profesionnelle.

                    Rigoureux et curieux, je continue à m'autoformer seul sur différents languages.
                </p>

            </div>

        </section>

    )
}

export default Hero;