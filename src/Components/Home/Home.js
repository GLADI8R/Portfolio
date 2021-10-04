import '../../Sass/styles.scss';
import './Home.scss';
import Skills from '../Skills/Skills';
import { Fragment } from 'react';

const Home = () => {
    return(
        <Fragment>
            <div className="container">
                <div className="mainHead centered textWhite">Hi, I'm Danish</div>
                <div className="desc centered textPink">Web Developer and Programming Enthusiast</div>
                <h2 className="centered textWhite">Skills and Tools</h2>
                
                <Skills />
            </div>
        </Fragment>
        
    );
};

export default Home;