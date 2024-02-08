import React from 'react';

import classes from "./IconHelper.module.css";


const IconHelper = (props) => {

    return (
        <main className={`${classes.wrap} flex`}>
            {props.children}
        </main>
    );
};

export {IconHelper};