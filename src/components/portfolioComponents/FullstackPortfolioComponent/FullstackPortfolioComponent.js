import React from 'react';

import classes from "./FullstackPortfolioComponent.module.css";
import fullstackData from "../../../data/projects/fullstackData";
import {SinglePortfolioComponents} from "../SinglePortfolioComponents/SinglePortfolioComponents";


const FullstackPortfolioComponent = () => {
    return (
        <main className={`${classes.wrap} width`}>
            {fullstackData.map(obj => <SinglePortfolioComponents key={obj.id} obj={obj}/>)}
        </main>
    );
};

export {FullstackPortfolioComponent};