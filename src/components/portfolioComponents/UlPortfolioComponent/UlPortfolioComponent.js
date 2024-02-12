import React from 'react';
import {NavLink} from "react-router-dom";

import classes from "./UlPortfolioComponent.module.css";


const UlPortfolioComponent = () => {

    return (
        <ul className={`${classes.ulPortfolio} flex width`}>
            <NavLink to={'/portfolio/all'}>
                <li>All</li>
            </NavLink>

            <NavLink to={'/portfolio/react'}>
                <li>React</li>
            </NavLink>

            <NavLink to={'/portfolio/angular'}>
                <li>Angular</li>
            </NavLink>

            <NavLink to={'/portfolio/javascript'}>
                <li>Javascript</li>
            </NavLink>

            <NavLink to={'/portfolio/fullstack'}>
                <li>Fullstack</li>
            </NavLink>
        </ul>
    );
};

export {UlPortfolioComponent};