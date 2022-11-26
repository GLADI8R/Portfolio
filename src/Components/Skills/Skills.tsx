import SkillCard from './SkillCard';

import './Skills.scss';
import '../../Sass/styles.scss';

import cpp from '../../Asset/icons/cpp.png';
import html from '../../Asset/icons/html.png';
import css from '../../Asset/icons/css.png';
import bootstrap from '../../Asset/icons/bootstrap.svg';
import sass from '../../Asset/icons/sass.png';
import js from '../../Asset/icons/javascript.jpg';
import ts from '../../Asset/icons/typescript.svg';
import node from '../../Asset/icons/node.svg';
import java from '../../Asset/icons/java.svg';
import spring from '../../Asset/icons/spring.svg';
import npm from '../../Asset/icons/npm.png';
import express from '../../Asset/icons/express.png';
import git from '../../Asset/icons/git.png';
import mongo from '../../Asset/icons/mongo.png';
import postgre from '../../Asset/icons/postgresql.svg';
import react from '../../Asset/icons/react.png';
import flutter from '../../Asset/icons/flutter.svg';
import dart from '../../Asset/icons/dart.svg';
import illustrator from '../../Asset/icons/illustrator.svg';
import docker from '../../Asset/icons/docker.svg';
import kubernetes from '../../Asset/icons/kubernetes.svg';

const Skills = () => {
    return(
        <div id="tools">
            <section>
                <SkillCard image={cpp} text="C++" />
                <SkillCard image={java} text="Java" />
                <SkillCard image={js} text="JS" />
                <SkillCard image={ts} text="TypeScript" />
                <SkillCard image={react} text="React" />
                <SkillCard image={spring} text="Spring Boot" />
                <SkillCard image={node} text="NodeJs" />
                <SkillCard image={express} text="Express" />
                <SkillCard image={docker} text="Docker" />
                <SkillCard image={kubernetes} text="Kubernetes" />
                <SkillCard image={html} text="HTML" />
                <SkillCard image={css} text="CSS" />
                <SkillCard image={bootstrap} text="Bootstrap" />
                <SkillCard image={sass} text="Sass" />
                <SkillCard image={npm} text="NPM" />
                <SkillCard image={git} text="Git" />
                <SkillCard image={mongo} text="MongoDB" />
                <SkillCard image={postgre} text = "PostgreSQL" />
                <SkillCard image={flutter} text="Flutter" />
                <SkillCard image={dart} text="Dart" />
                <SkillCard image={illustrator} text="Illustrator" />
            </section>
        </div>
    );
};

export default Skills;