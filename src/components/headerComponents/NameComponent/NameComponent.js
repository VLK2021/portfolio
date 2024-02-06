import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";

import classes from "./NameComponent.module.css";



const NameComponent = () => {
    const [currentInterval, setCurrentInterval] = useState(0);

    const {t} = useTranslation();
    const colors = ['#fcfcfc', '#25ba9f'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentInterval(prev => (currentInterval + 1) % colors.length);
        }, 1000);

        return () => clearInterval(interval);
    }, [colors.length, currentInterval]);

    const currentColors = colors[currentInterval];


    return (
        <main>
            <p className={`${classes.name}`} style={{color: `${currentColors}`}}>{t('prt-name')}</p>
        </main>
    );
};

export {NameComponent};