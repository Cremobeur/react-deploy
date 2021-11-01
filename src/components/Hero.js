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
                    <p>Développeur Front-end</p>
                </div>

            </div>

            <div className="main-about">

                <h3>Quelques mots sur moi..</h3>

                <p>
                    Bonjour, je m'appelle Christophe et j'ai 31 ans. Je suis passionné par le développement web depuis longtemps, j'ai donc décidé d'entreprendre une reconversion professionelle.

                    Rigoureux et curieux, je continue à m'autoformer seul sur différents languages.
                </p>

            </div>

            <div className="main-school">

                <h3>Parcours..</h3>

                <div className="school-web">

                    <div className="info-school">

                        <span>2021</span>

                        <h4><i class="fas fa-code"></i>Formation développeur web / web mobile</h4>

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

                        <h4><i class="fas fa-crop"></i>Bac pro communication graphique</h4>

                    </div>

                    <p>
                        J'ai pu apprendre à proposer des solutions conceptuelles et stratégiques pour
                        répondre aux problématiques des clients. Savoir et créer une identité visuelle,
                        un logotype, une charte graphique, un design graphique, des packagings de produits et
                        des supports publicitaires.
                    </p>

                </div>

                <div className="school-photo">

                    <div className="info-school">

                        <span>2006</span>

                        <h4><i class="fas fa-camera-retro"></i>Cap photographie</h4>

                    </div>

                    <p>
                        Développer ma créativité et affiner mon oeil afin de réaliser les meilleurs clichés
                        possibles tels étaient les objectifs principaux. Couvrir une actualité, un mariage
                        ou même des modèles d’illustration, pour avoir comme objectif de saisir au mieux le
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
                    <li>
                        <i class="fab fa-github-alt"></i><a target="blank" href="https://github.com/Cremobeur">Github</a>
                    </li>

                    <li>
                        <i class="fab fa-linkedin"></i><a target="blank" href="https://www.linkedin.com/in/cremobeur/">Linkedin</a>
                    </li>
                </ul>

            </div>

        </section>

    )
}

export default Hero;