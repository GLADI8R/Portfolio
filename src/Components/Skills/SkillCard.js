import './Skills.scss';
import '../../Sass/styles.scss';

const SkillCard = (props) => {
    return(
        <div className="item textWhite">
            <img src={props.image} alt="logo"></img>
            <span className="caption">{props.text}</span>
        </div>
    );
};

export default SkillCard;