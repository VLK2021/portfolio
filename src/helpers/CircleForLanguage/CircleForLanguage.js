import React from 'react';

import classes from "./CircleForLanguage.module.css";


const CircleForLanguage = (props) => {
    const {currentColor} = props;


    return (
        <div className={`${classes.wrap}`} style={{background: currentColor}}>

        </div>
    );
};

export {CircleForLanguage};