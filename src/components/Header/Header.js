import React from 'react';

import classes from "./Header.module.css";
import {useTranslation} from "react-i18next";
import {NameComponent, UlComponent} from "../headerComponents";


const Header = () => {
    const {t, i18n} = useTranslation();

    const langHandler = (e) => {
        i18n.changeLanguage(e.target.value === 'ua' ? 'ua' : 'en')
    }


    return (
        <main className={`${classes.wrap} flex`}>
            {/*<p className={`${classes.name}`}>{t('prt-name')}</p>*/}
            <section>
                <NameComponent/>
            </section>

            <section>
                <UlComponent/>
            </section>

            <section>
                <select onChange={langHandler} className={`${classes.select}`}>
                    <option value={"en"} className={`${classes.option}`}>EN</option>
                    <option value={"ua"} className={`${classes.option}`}>UA</option>
                </select>
            </section>

            <section>
                <button className={`${classes.btn} flex`}
                        onClick={() => null}
                >
                    {t('prt-header-name')}
                </button>
            </section>
        </main>
    );
};

export {Header};