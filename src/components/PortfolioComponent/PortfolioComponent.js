import React from 'react';
import {GiGooeyMolecule} from "react-icons/gi";
import {useTranslation} from "react-i18next";
import {NavLink, Outlet} from "react-router-dom";

import classes from "./PortfolioComponent.module.css";
import {IconRotate} from "../framerMotionComponents";
import {UlPortfolioComponent} from "../portfolioComponents";


const PortfolioComponent = () => {
    const {t} = useTranslation();


    return (
        <main className={`${classes.wrap} width flex-direction`}>
            <section className={`flex`}>
                <h1 className={`${classes.title}`}>{t('prt-portfolio-title')}</h1>
                <IconRotate icon={GiGooeyMolecule}/>
            </section>

            <h4 className={`${classes.secondTitle}`}>{t('prt-portfolio-second-title')}</h4>

            <section className={`${classes.projectsBlock} width flex-direction`}>
                <UlPortfolioComponent/>
            </section>

            <section className={`width`}>
                <Outlet/>
            </section>
        </main>
    );
};

export {PortfolioComponent};