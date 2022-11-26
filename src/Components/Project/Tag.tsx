import './Project.scss';

const Tag = (props: {tags: [String]}) => {
    return(
        <p>
            {props.tags.map( tag => (
                <span className="tag">{tag}</span>
            ))}
        </p>
    );
};

export default Tag;