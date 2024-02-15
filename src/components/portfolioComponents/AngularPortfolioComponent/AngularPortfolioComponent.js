import React from 'react';

import angularData from '../../../data/projects/angularData';
import classes from "./AngularPortfolioComponent.module.css";
import {SinglePortfolioComponents} from "../SinglePortfolioComponents/SinglePortfolioComponents";


const AngularPortfolioComponent = () => {
    return (
        <main className={`${classes.wrap} width`}>
            {angularData.map(obj => <SinglePortfolioComponents key={obj.id} obj={obj}/>)}
        </main>
    );
};

export {AngularPortfolioComponent};