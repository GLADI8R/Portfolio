import '../../Sass/styles.scss';
import './Footer.scss';
import github from '../../Asset/icons/Github.svg';
import linkedin from '../../Asset/icons/linkedin.svg';
import gmail from '../../Asset/icons/gmail.svg';

const Footer = () => {
    return(
        <footer className="textWhite centered">
            <p>Say Hello!</p>
            <br />
            <a href="https://github.com/GLADI8R"><img src={github} alt="icon"></img></a>
            <a href="https://www.linkedin.com/in/danish-ahmed-mehmuda-34b5651b2/"><img src={linkedin} alt="icon"></img></a>
            <a href="mailto:danishahmed@gmail.com"><img src={gmail} alt="icon"></img></a>
        </footer>
    );
};

export default Footer;