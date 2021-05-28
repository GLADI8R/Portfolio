import TimeLine from '../Timeline/Timeline';

import './About.scss';
import '../../Sass/styles.scss';
import Danish from '../../Asset/images/Danish.jpg';
import resume from '../../Asset/Resume/Danish_Resume.pdf';

const About = () => {
    return(
        <div className="container centered textWhite">
            <h2 className="textPink">About Me</h2>
            <div className="row">
                <div className="column col1 centered right">
                    <img src={Danish} alt="profile"></img>
                    <span className="caption">Danish Ahmed Mehmuda</span>
                </div>
                <div className="column col2 about">
                    <p>I am Electronics and Communication Engineering Undergraduate</p>
                    <p>I have good understanding of Data Structures and Algorithms</p>
                    <p>I am passionate about programming and have good skills on Web Development</p>
                    <a href={resume} download>
                        <span>My Resume</span>
                    </a>
                </div>
            </div>
            <TimeLine />
        </div>
    );
};

export default About;