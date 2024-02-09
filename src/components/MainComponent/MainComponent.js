import React from 'react';
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";

import classes from "./MainComponent.module.css";
import {MoleculeIconComponent} from "../framerMotionComponents/MoleculeIconComponent/MoleculeIconComponent";


const MainComponent = () => {
    const {t} = useTranslation();


    return (
        <main className={`${classes.wrap} width`}>
            <h1 className={`${classes.name} flex`}>{t('prt-name')}</h1>

            <p className={`${classes.title}`}>Front-End Developer</p>

            <p className={`${classes.info}`}>
                {t('prt-main-text')}
            </p>

            <NavLink to={'/contacts'}>
                <button className={`${classes.btn} flex`}>
                    {t('prt-main-btn')}
                </button>
            </NavLink>

            <MoleculeIconComponent/>
        </main>
    );
};

export {MainComponent};