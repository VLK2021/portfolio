import React from 'react';
import {FaGithub} from "react-icons/fa6";
import {FaLinkedinIn} from "react-icons/fa";
import {PiTelegramLogo} from "react-icons/pi";

import classes from "./LinksComponents.module.css";


const LinksComponents = () => {

    return (
        <main className={`${classes.wrap} flex-direction`}>
            <a href={'https://github.com/VLK2021'} target={'_blank'} rel="noreferrer"
               className={`${classes.circle} flex`}>
                <FaGithub className={classes.git}/>
            </a>

            <a href={'https://t.me/kvm20232023'} target={'_blank'} rel="noreferrer"
               className={`${classes.circle} flex`}>
                <PiTelegramLogo className={classes.git}/>
            </a>

            <a href={'https://www.linkedin.com/in/volodymyr-kostiuk-a35a16235/'} target={'_blank'} rel="noreferrer"
               className={`${classes.circle} flex`}>
                <FaLinkedinIn className={classes.git}/>
            </a>
        </main>
    );
};

export {LinksComponents};