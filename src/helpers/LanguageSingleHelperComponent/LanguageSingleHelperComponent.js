import React from 'react';

import classes from "./LanguageSingleHelperComponent.module.css";


const LanguageSingleHelperComponent = (props) => {
    const {title, body} = props

    return (
        <main className={`${classes.wrap} width`}>
            <h2>{title}</h2>

            <h3 className={`${classes.body}`}>{body}</h3>
        </main>
    );
};

export {LanguageSingleHelperComponent};