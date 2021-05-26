import './About.scss';
import '../../Sass/styles.scss';
import Danish from '../../Asset/images/Danish.jpg';

const About = () => {
    return(
        <div className="container centered textWhite">
            <h2 className="textPink mtop-4">About Me</h2>
            <div className="row">
                <div className="column centered">
                    <img src={Danish} alt="profile"></img>
                    <span className="caption">Danish Ahmed Mehmuda</span>
                </div>
                <div className="column centered about">
                    <p>I am Electronics and Communication Engineering Undergraduate</p>
                    <p>I have good understanding of Data Structures and Algorithms</p>
                    <p>I am passionate about programming and have good skills on Web Development</p>

                </div>
            </div>
        </div>
    );
};

export default About;