import Tag from './Tag';

import './Project.scss';

const ProjectCard = (props: {link: any, projHead: String, tags: any , description: String}) => {
    return(
        <a href={props.link}>
            <div className="card textWhite">
                <h3>{props.projHead}</h3>
                <Tag tags={props.tags}/>
                <p>{props.description}</p>
            </div>
        </a>
    );
};

export default ProjectCard;