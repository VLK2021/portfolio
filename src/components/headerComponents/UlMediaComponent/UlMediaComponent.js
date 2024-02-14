import React from 'react';
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

import classes from "./UlMediaComponent.module.css";


const UlMediaComponent = ({setShowMenu}) => {
    const {t} = useTranslation();

    const handleOnclick = () => {
        setShowMenu(false);
    }


    return (
        <main>
            <ul className={`${classes.ul} flex-direction`}>
                <NavLink to={`/`} activeClassName={classes.active} onClick={handleOnclick}>
                    <li className={`${classes.li}`}>{t("prt-header-ul-main")}</li>
                </NavLink>

                <NavLink to={`/about`} activeClassName={classes.active} onClick={handleOnclick}>
                    <li className={`${classes.li}`}>{t("prt-header-ul-about")}</li>
                </NavLink>

                <NavLink to={`/skills`} activeClassName={classes.active} onClick={handleOnclick}>
                    <li className={`${classes.li}`}>{t("prt-header-ul-skills")}</li>
                </NavLink>

                <NavLink to={`/language`} activeClassName={classes.active} onClick={handleOnclick}>
                    <li className={`${classes.li}`}>{t("prt-header-ul-language")}</li>
                </NavLink>

                <NavLink to={`/portfolio`} activeClassName={classes.active} onClick={handleOnclick}>
                    <li className={`${classes.li}`}>{t("prt-header-ul-portfolio")}</li>
                </NavLink>

                <NavLink to={`/contacts`} activeClassName={classes.active} onClick={handleOnclick}>
                    <li className={`${classes.li}`}>{t("prt-header-ul-contacts")}</li>
                </NavLink>
            </ul>
        </main>
    );
};

export {UlMediaComponent};