import React from 'react';
import {GiGooeyMolecule} from "react-icons/gi";
import {useTranslation} from "react-i18next";

import classes from "./AboutComponent.module.css";
import {IconRotate} from "../framerMotionComponents";
import {NavLink} from "react-router-dom";


const AboutComponent = () => {
    const {t} = useTranslation();


    return (
        <main className={`${classes.wrap} width flex-direction`}>
            <section className={`flex`}>
                <h1 className={`${classes.title}`}>{t('prt-about-title')}</h1>
                <IconRotate icon={GiGooeyMolecule}/>
            </section>

            <h4 className={`${classes.secondTitle}`}>{t('prt-about-second-title')}</h4>

            <p className={`${classes.text} ${classes.margin}`}>
                {t('prt-about-text1')}
            </p>

            <p className={`${classes.text} ${classes.marginText}`}>
                {t('prt-about-text2')}
            </p>

            <p className={`${classes.text} ${classes.marginText}`}>
                {t('prt-about-text3')}
                <a href="https://github.com/VLK2021" target={'_blank'} rel="noreferrer"
                   className={classes.colorText}>GitHub</a>
            </p>

            <p className={`${classes.text} ${classes.marginText}`}>
                {t('prt-about-text4')}
                <NavLink to={'/portfolio'}>
                    <span className={classes.colorText}>Portfolio</span>
                </NavLink>
            </p>

            <p className={`${classes.text} ${classes.marginText}`}>
                {t('prt-about-text5')}
            </p>
        </main>
    );
};

export {AboutComponent};