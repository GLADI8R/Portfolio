import ProjectCard from './ProjectCard';

import '../../Sass/styles.scss';
import './Project.scss'

const Project = () => {
    return(
        <div className="container">
            <h2 className="centered textPink">Projects</h2>
            <div id="proj">
                <section>
                    <ProjectCard 
                        key = "1"
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
                        description="Clone of Spotify with flutter"
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
                </section>
            </div>
        </div>
    );
};

export default Project;