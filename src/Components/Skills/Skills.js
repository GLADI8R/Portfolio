import SkillCard from './SkillCard';

import './Skills.scss';
import '../../Sass/styles.scss';

import cpp from '../../Asset/icons/cpp.png';
import html from '../../Asset/icons/html.png';
import css from '../../Asset/icons/css.png';
import bootstrap from '../../Asset/icons/bootstrap.svg';
import sass from '../../Asset/icons/sass.png';
import js from '../../Asset/icons/javascript.jpg';
import node from '../../Asset/icons/node.svg';
import npm from '../../Asset/icons/npm.png';
import express from '../../Asset/icons/express.png';
import git from '../../Asset/icons/git.png';
import mongo from '../../Asset/icons/mongo.png';
import react from '../../Asset/icons/react.png';


const Skills = () => {
    return(
        <div id="tools">
            <section>
                <SkillCard image={cpp} text="C++" />
                <SkillCard image={html} text="HTML" />
                <SkillCard image={css} text="CSS" />
                <SkillCard image={bootstrap} text="Bootstrap" />
                <SkillCard image={sass} text="Sass" />
                <SkillCard image={js} text="JS" />
                <SkillCard image={node} text="NodeJs" />
                <SkillCard image={npm} text="NPM" />
                <SkillCard image={express} text="Express" />
                <SkillCard image={git} text="Git" />
                <SkillCard image={mongo} text="MongoDB" />
                <SkillCard image={react} text="React" />
            </section>
        </div>
    );
};

export default Skills;