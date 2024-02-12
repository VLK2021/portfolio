import React from 'react';

import classes from "./SinglePortfolioComponents.module.css";



const SinglePortfolioComponents = (props) => {
    const {obj: {name, technologies, image, link}} = props;


    return (
        <main className={`${classes.wrap} flex-direction`}>
            <section className={`${classes.imgBlock} width`}>
                <img src={image} alt={`Project: ${name}`}/>
            </section>

            <p className={`${classes.name} flex`}>{name}</p>

            <p className={`${classes.technologies} flex`}>{technologies}</p>
        </main>
    );
};

export {SinglePortfolioComponents};