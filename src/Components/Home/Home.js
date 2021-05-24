import { Fragment } from 'react';

import '../../Sass/styles.scss';
import './Home.scss';
import Skills from '../Skills/Skills';

const Home = () => {
    return(
        <Fragment>
            <div className="container">
                <div className="mainHead centered textWhite">Hi, I'm Danish</div>
                <div className="desc centered textPink">Web Developer and Programming Enthusiast</div>
                <h3 className="tot centered textWhite">Tools of Trade</h3>
                <Skills />
            </div>
        </Fragment>
        
    );
};

export default Home;