import React from 'react';
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

import classes from "./UlComponent.module.css";


const UlComponent = () => {
    const {t} = useTranslation();


    return (
        <main>
            <ul className={`${classes.ul} flex`}>
                <NavLink to={`/main`} activeClassName={classes.active}>
                    <li className={`${classes.li}`}>{t("prt-header-ul-main")}</li>
                </NavLink>

                <NavLink to={`/about`} activeClassName={classes.active}>
                    <li className={`${classes.li}`}>{t("prt-header-ul-about")}</li>
                </NavLink>

                <NavLink to={`/skills`} activeClassName={classes.active}>
                    <li className={`${classes.li}`}>{t("prt-header-ul-skills")}</li>
                </NavLink>

                <NavLink to={`/language`} activeClassName={classes.active}>
                    <li className={`${classes.li}`}>{t("prt-header-ul-language")}</li>
                </NavLink>

                <NavLink to={`/portfolio`} activeClassName={classes.active}>
                    <li className={`${classes.li}`}>{t("prt-header-ul-portfolio")}</li>
                </NavLink>

                <NavLink to={`/contacts`} activeClassName={classes.active}>
                    <li className={`${classes.li}`}>{t("prt-header-ul-contacts")}</li>
                </NavLink>
            </ul>
        </main>
    );
};

export {UlComponent};