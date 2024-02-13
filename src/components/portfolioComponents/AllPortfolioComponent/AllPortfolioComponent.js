import React from 'react';

import classes from "./AllPortfolioComponent.module.css";
import reactData from '../../../data/projects/reactData';
import angularData from '../../../data/projects/angularData';
import javascriptData from '../../../data/projects/javascriptData';
import fullstackData from '../../../data/projects/fullstackData';
import {SinglePortfolioComponents} from "../SinglePortfolioComponents/SinglePortfolioComponents";


const AllPortfolioComponent = () => {
const arrayAll = [...reactData, ...angularData, ...javascriptData, ...fullstackData];


    return (
        <main className={`${classes.wrap} width`}>
            {arrayAll.map(obj => <SinglePortfolioComponents key={obj.id} obj={obj}/>)}
        </main>
    );
};

export {AllPortfolioComponent};