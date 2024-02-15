import React from 'react';

import classes from "./ReactPortfolioComponent.module.css";
import reactData from '../../../data/projects/reactData';
import {SinglePortfolioComponents} from "../SinglePortfolioComponents/SinglePortfolioComponents";


const ReactPortfolioComponent = () => {


    return (
        <main className={`${classes.wrap} width`}>
            {reactData.map(obj => <SinglePortfolioComponents key={obj.id} obj={obj}/>)}
        </main>
    );
};

export {ReactPortfolioComponent};