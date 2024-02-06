import React from 'react';
import {FaGithub} from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import {Outlet} from 'react-router-dom';

import classes from "./Layout.module.css";
import {Header} from "../components";
import foto from '../images/foto.jpg';


const Layout = () => {


    return (
        <main className={`${classes.wrap} width`}>
            <section className={'width flex'}>
                <Header/>
            </section>

            <div className={`${classes.layoutBlock} flex`}>
                <figure className={`${classes.imgBlock}`}>
                    <img src={foto} alt="my img" className={`${classes.img}`}/>
                </figure>

                <section className={`${classes.outletBlock} flex-direction`}>
                    <Outlet/>
                </section>

                <section className={`${classes.linkBlock} flex-direction`}>
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
                </section>
            </div>
        </main>
    );
};

export {Layout};