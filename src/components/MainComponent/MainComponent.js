import React from 'react';
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import {SiMoleculer} from "react-icons/si";

import classes from "./MainComponent.module.css";
import {IconRotate} from "../framerMotionComponents";
import {MoleculeIconComponent} from "../framerMotionComponents/MoleculeIconComponent/MoleculeIconComponent";


const MainComponent = () => {
    const {t} = useTranslation();


    return (
        <main className={`${classes.wrap} width`}>
            <h1 className={`${classes.name} flex`}>{t('prt-name')}</h1>

            <section className={`flex`}>
                <p className={`${classes.title}`}>Front-End Developer</p>
                <span><IconRotate icon={SiMoleculer}/></span>
            </section>

            <p className={`${classes.info}`}>
                {t('prt-main-text')}
            </p>

            <NavLink to={'/contacts'} className={`${classes.btnBlock}`}>
                <button className={`${classes.btn} flex`}>
                    {t('prt-main-btn')}
                </button>
            </NavLink>

            <MoleculeIconComponent/>
        </main>
    );
};

export {MainComponent};