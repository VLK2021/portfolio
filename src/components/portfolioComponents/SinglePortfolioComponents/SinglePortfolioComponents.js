import React from 'react';

import classes from "./SinglePortfolioComponents.module.css";



const SinglePortfolioComponents = (props) => {
    const {obj: {name, technologies, image, link}} = props;


    return (
        <main className={`${classes.wrap} flex`}>

        </main>
    );
};

export {SinglePortfolioComponents};