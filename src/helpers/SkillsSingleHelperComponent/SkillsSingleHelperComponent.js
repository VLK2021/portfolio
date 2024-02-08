import React from 'react';

import classes from "./SkillsSingleHelperComponent.module.css";
import {IconHelper} from "../IconHelper/IconHelper";


const SkillsSingleHelperComponent = (props) => {
const {icon: IconComponent, skills} = props;

    return (
        <article className={`${classes.wrap} flex-direction`}>
            <IconHelper>
                <IconComponent  className={`${classes.colorBackIcon}`}/>
            </IconHelper>

            <ul className={classes.listStyles}>
                {
                    skills && skills.map(skill => <li key={skill.id}>{skill.body}</li>)
                }
            </ul>
        </article>
    );
};

export {SkillsSingleHelperComponent};