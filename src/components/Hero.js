import React from "react";
import profil from "../img/profil-img.jpg";

const Hero = () => {
    return (

        <section className="App-hero">

            <div className="main-profil">

                <picture>
                    <img src={profil} alt="" />
                </picture>

                <div className="main-spitch">
                    <h2>Christophe Rémy</h2>
                    <p>Développeur Front-web</p>
                </div>

            </div>

            <div className="main-about">

                <h3>Quelques mots sur moi..</h3>

                <p>
                    Bonjour, je m'appelle Christophe et j'ai 31 ans. Je suis passionné par le développement web depuis longtemps, j'ai donc décidé d'entreprendre une reconversion professionelle.

                    J'ai pu mener mon projet avec succès et je suis maintenant déterminé à trouver ma première expérience profesionnelle.

                    Rigoureux et curieux, je continue à m'autoformer seul sur différents languages.
                </p>

            </div>

            <div className="main-school">

                <h3>Parcours..</h3>

                <div className="school-web">

                    <div className="info-school">

                        <span>2021</span>

                        <h4>Formation développeur web / web mobile</h4>

                    </div>

                    <p>
                        Durant cette formation j'ai appris à intégrer des maquettes,
                        mettre en place le responsive d'un site et à dynamiser l'expérience utilisateur.
                        J'ai aussi pu apprendre à créer une base de données et à faire appel à son contenu.
                    </p>

                </div>

                <div className="school-graph">

                    <div className="info-school">

                        <span>2008</span>

                        <h4>Bac pro communication graphique</h4>

                    </div>

                    <p>
                        J'ai pu apprendre à proposer des solutions conceptuelles et stratégiques pour
                        répondre aux problématiques des clients. Savoir et créer une identité visuelle,
                        un logotype, une chartegraphique, un design graphique, des packagings de produits et
                        des supports publicitaires.
                    </p>

                </div>

                <div className="school-photo">

                    <div className="info-school">

                        <span>2006</span>

                        <h4>Cap photographie</h4>

                    </div>

                    <p>
                        Développer ma créativité et affiner mon oeil afin de réaliser les meilleurs clichés
                        possibles tels étaient les objectifs principaux. Couvrir une actualité, un mariage
                        ou même des modèlesd’illustration, pour avoir comme objectif de saisir au mieux le
                        sujet de mes photographies.
                    </p>

                </div>

            </div>

            <div className="main-like">

                <h3>J'aime..</h3>

                <p>Horlogerie, Photographie, Japon</p>

            </div>

            <div className="main-social">

                <h3>Retrouvez-moi sur..</h3>

                <ul>
                    <li><a href="./Header.js">Github</a></li>
                    <li><a href="./Header.js">Linkedin</a></li>
                </ul>

            </div>

        </section>

    )
}

export default Hero;