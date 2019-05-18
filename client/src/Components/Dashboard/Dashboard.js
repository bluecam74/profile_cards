import React, { Component } from "react";
import profPic from "../../img/RE_Prof_Pic.jpg";
import "./Dashboard.css";


class Dashboard extends Component {

    render() {
        console.log(this.props.state)
        return (

            <div className="background">
                <div className="header">


                    <div className="jumbotron" >
                        <h1 className="display-4 text-center">Malak Abdul</h1>
                        <h4 className=" text-center">Full Stack Web Developer</h4>
                        <hr className="my-4" />
                        <div className="row my-2">
                            <div className="col-md-4"></div>

                            <div className="col-md-4"></div>
                        </div>
                    </div>

                </div>

                <div className="body_cards">
                    <section className="section-tours" id="section-tours">
                        <div className="u-center-text u-margin-bottom-big">
                            <h2 className="heading-secondary">
                                Portfolio
                        </h2>
                        </div>



                        {/* Cards Start Here */}
                        <div className="row firstrow">
                            {/* Burger Card */}
                            <div className="col-md-4 mx-auto col1">
                                <div className="card card1">
                                    <div className="card__side card__side--front card__side--front-1">
                                        <div className="card__picture card__picture--1">

                                        </div>
                                        <h4 className="card__heading card__heading--1">
                                            <span className="card__heading-span card__heading-span--1">Burger App</span>
                                        </h4>
                                        <div className="card__details card__details--1">
                                            <ul>
                                                <li>Full Stack</li>
                                                <li>Database Application</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card__side card__side--back card__side--back-1">
                                        <div className="card__cta">
                                            <div className="card__info-box">
                                                <p className="card__info-view">MySQL - ORM - Handlebars </p>
                                                <p className="card__info-view">HTML - CSS - Node.js</p>
                                            </div>
                                            <a href="https://burger-app-1-bluecam.herokuapp.com/" className="btn btn-lg mx-2" target="_blank" >Website</a>
                                            <a href="https://github.com/bluecam74/burger" className="btn btn-lg mx-2" target="_blank" >GitHub</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Scrape Summary Card */}
                            <div className="col-md-4 mx-auto">
                                <div className="card">
                                    <div className="card__side card__side--front card__side--front-2">
                                        <div className="card__picture card__picture--2">

                                        </div>
                                        <h4 className="card__heading card__heading--2">
                                            <span className="card__heading-span card__heading-span--1">The Daily Pike</span>
                                        </h4>
                                        <div className="card__details card__details--2">
                                            <ul>
                                                <li>Full Stack </li>
                                                <li>Scrape Application</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card__side card__side--back card__side--back-2">
                                        <div className="card__cta">
                                            <div className="card__info-box">
                                                <p className="card__info-view">MongoDB - Mongoose - Cheerio</p>
                                                <p className="card__info-view">Ajax - Express - Javascript </p>
                                                <p className="card__info-view">HTML - CSS - Node.js</p>
                                            </div>
                                            <a href="https://scrape-news-notes.herokuapp.com/" className="btn btn-lg mx-2" target="_blank">Website</a>
                                            <a href="https://github.com/bluecam74/Scrape" className="btn btn-lg mx-2" target="_blank">GitHub</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*  Trivia Game Card */}
                            <div className="col-md-4 mx-auto">
                                <div className="card">
                                    <div className="card__side card__side--front card__side--front-3">
                                        <div className="card__picture card__picture--3">

                                        </div>
                                        <h4 className="card__heading card__heading--3">
                                            <span className="card__heading-span card__heading-span--1">Classic Camaro Trivia</span>
                                        </h4>
                                        <div className="card__details card__details--3">
                                            <ul>
                                                <li>Javascript / jQuery</li>
                                                <li>Timers Application</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card__side card__side--back card__side--back-1">
                                        <div className="card__cta">
                                            <div className="card__info-box">
                                                <p className="card__info-view">jQuery - Javascript</p>
                                                <p className="card__info-view">setTimeout Method</p>
                                            </div>
                                            <a href="https://bluecam74.github.io/TriviaGame/" className="btn btn-lg mx-2" target="_blank">Website</a>
                                            <a href="https://github.com/bluecam74/TriviaGame" className="btn btn-lg mx-2" target="_blank">GitHub</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            </div> 

                            <div className="row secondrow">
                            {/*  Crystal Game Card */}
                            <div className="col-md-4 mx-auto">
                                <div className="card">
                                    <div className="card__side card__side--front card__side--front-3">
                                        <div className="card__picture card__picture--5">

                                        </div>
                                        <h4 className="card__heading card__heading--3">
                                            <span className="card__heading-span card__heading-span--1">Crystal Collector Game</span>
                                        </h4>
                                        <div className="card__details card__details--3">
                                            <ul>
                                                <li>Javascript / jQuery</li>
                                                <li>Game Application</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card__side card__side--back card__side--back-2">
                                        <div className="card__cta">
                                            <div className="card__info-box">
                                                <p className="card__info-view">jQuery - Javascript</p>
                                            </div>
                                            <a href="https://bluecam74.github.io/unit-4-game/" className="btn btn-lg mx-2" target="_blank">Website</a>
                                            <a href="https://github.com/bluecam74/unit-4-game" className="btn btn-lg mx-2" target="_blank">GitHub</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Word Guess Card */}
                            <div className="col-md-4 mx-auto">
                                <div className="card">
                                    <div className="card__side card__side--front card__side--front-4">
                                        <div className="card__picture card__picture--4">

                                        </div>
                                        <h4 className="card__heading card__heading--4">
                                            <span className="card__heading-span card__heading-span--1">Word Guess</span>
                                        </h4>
                                        <div className="card__details card__details--4">
                                            <ul>
                                                <li>Javascript / jQuery</li>
                                                <li>Word Guess Game</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card__side card__side--back card__side--back-1">
                                        <div className="card__cta">
                                            <div className="card__info-box">
                                                <p className="card__info-view">Javascript - jQuery</p>
                                            </div>
                                            <a href="https://bluecam74.github.io/Word-Guess-Game/" className="btn btn-lg mx-2" target="_blank">Website</a>
                                            <a href="https://github.com/bluecam74/Word-Guess-Game" className="btn btn-lg mx-2" target="_blank">GitHub</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Pikmin Clicky Card */}
                            <div className="col-md-4 mx-auto col1">
                                <div className="card card1">
                                    <div className="card__side card__side--front card__side--front-1">
                                        <div className="card__picture card__picture--6">

                                        </div>
                                        <h4 className="card__heading card__heading--1">
                                            <span className="card__heading-span card__heading-span--1">Pikmin Memory Game</span>
                                        </h4>
                                        <div className="card__details card__details--1">
                                            <ul>
                                                <li>Full Stack</li>
                                                <li>React Application</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card__side card__side--back card__side--back-2">
                                        <div className="card__cta">
                                            <div className="card__info-box">
                                                <p className="card__info-view">React - Bootstrap - Express </p>
                                                <p className="card__info-view">JSON - Node.js</p>
                                            </div>
                                            <a href="https://pikmin-clicky.herokuapp.com/" className="btn btn-lg mx-2" target="_blank" >Website</a>
                                            <a href="https://github.com/bluecam74/Pikmin-Clicky-Game" className="btn btn-lg mx-2" target="_blank" >GitHub</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="header1">


                    <div className="jumbotron" >
                        <h1 className="display-4 text-center">About Me</h1>
                        {/* <hr className="my-4" /> */}
                        <div className="row my-2">
                            <div className="col-md profBox">
                                {/* <div className = "row"> */}

                                <div className="profPic"><img src={profPic} alt='Profile Pic' /></div>

                                <div className="profText">
                                    <p>Malak was born and raised in Orange County. She went to college at UC Irvine and obtained a degree in Criminology and Law. In her free time, she likes to surf, snowboard, and take long drives.</p>

                                    <p>After experiencing different industries, including real estate, retail management and social work, Malak developed a passion for software development and engineering until ultimately enrolling in formal classes and programs. She is proud to say that she is currently a Full Stack Web Developer.</p>

                                    <p>Technical skills include Node.Js, Express, JavaScript, jQuery, React.js, React Native, GIT, Github, MongoDB, MySQL, Firebase, HTML, CSS, Bootstrap, Media Queries, APIs, JSON, REST, AJAX, the command line, computer science fundamentals, writing tests. Malak's background in both customer service and technical skills make her a great candidate for working in the software engineering industry.</p>

                                </div>
                                {/* </div> */}

                            </div>
                        </div>
                    </div>

                </div>
            </div>



        );

    }


}

export default Dashboard;