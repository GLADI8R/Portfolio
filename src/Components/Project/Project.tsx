import ProjectCard from './ProjectCard';

import '../../Sass/styles.scss';
import './Project.scss'

const Project = () => {
    return (
        <div className="container">
            <h2 className="centered textPink">Projects</h2>
            <div id="proj">
                <section>
                    <ProjectCard
                        key="1"
                        projHead="Tic Tac Toe"
                        description="Two-player Tic Tac Toe game."
                        link="https://github.com/GLADI8R/Tic-Tac-Toe-Game"
                        tags={["HTML", "JavaScript"]}
                    />
                    <ProjectCard
                        key="2"
                        projHead="To-Do List"
                        description="A webapp to manage your todos."
                        link="https://floating-woodland-35994.herokuapp.com/"
                        tags={["Nodejs", "Mongodb", "Express", "Ejs"]}
                    />
                    <ProjectCard
                        key="3"
                        projHead="JS Medium"
                        description="A Blog site where you can read and write articles."
                        link="https://github.com/GLADI8R/JSMedium"
                        tags={["Express", "Mongodb", "Bcrypt", "Ejs"]}
                    />
                    <ProjectCard
                        key="4"
                        projHead="Spotify UI Clone"
                        description="Clone of Spotify with Flutter"
                        link="https://github.com/GLADI8R/spotify_clone"
                        tags={["Flutter", "Dart"]}
                    />
                    <ProjectCard
                        key="5"
                        projHead="Expense Tracker"
                        description="Full Stack Expense Tracker with React Hooks, Context API, MongoDB to store transaction history"
                        link="https://github.com/GLADI8R/Expense-Tracker"
                        tags={["MongoDB", "Express", "React", "NodeJS"]}
                    />
                    <ProjectCard
                        key="6"
                        projHead="Weatherly"
                        description="Chrome Extension made using HTML, CSS, JavaScript and OpenWeatherMap API"
                        link="https://github.com/GLADI8R/WEATHERLY"
                        tags={["HTML", "JavaScript", "API"]}
                    />
                    <ProjectCard
                        key="7"
                        projHead="Memorize"
                        description="A number memorizing game made using flutter."
                        link="https://github.com/DhrupamP/Memorize"
                        tags={["Flutter", "Dart"]}
                    />
                    <ProjectCard
                        key="8"
                        projHead="Movie Dataset Analysis"
                        description="Analysis of a movie dataset using pandas and seaborn, python libraries"
                        link="https://github.com/GLADI8R/Data_Analysis"
                        tags={["Python", "Data Analysis", "Pandas"]}
                    />
                    <ProjectCard
                        key="9"
                        projHead="Recommender System"
                        description="Movie recommender system showing trending, top genre movies, and recommending new movies to users"
                        link="https://github.com/GLADI8R/Recommender-System"
                        tags={["Python", "Recommender-System"]}
                    />
                    <ProjectCard
                        key="10"
                        projHead="Anomaly Detection"
                        description="Anomaly detection on credit card transaction dataset using IsolationForest, PCA and t-SNE"
                        link="https://github.com/GLADI8R/AnomalyDetection"
                        tags={["Python", "Unsupervised Learning"]}
                    />
                    <ProjectCard
                        key="11"
                        projHead="Flight Delay Forecasting"
                        description="Time-series analysis and forecasting the future delays"
                        link="https://github.com/GLADI8R/FlightsDelayForecasting"
                        tags={["Python", "Time-series", "ARIMA"]}
                    />
                    <ProjectCard
                        key="12"
                        projHead="Airline Ticket Reservation"
                        description="Microservices based architecture for ticket reservation"
                        link="https://github.com/GLADI8R/AirlineReservation"
                        tags={["Spring Boot", "ReactJS", "MySQL"]}
                    />
                </section>
            </div>
        </div>
    );
};

export default Project;