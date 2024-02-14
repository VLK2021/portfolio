import React from 'react';
import {Outlet} from 'react-router-dom';

import classes from "./Layout.module.css";
import {Header, LinksComponents} from "../components";
import foto from '../images/foto.jpg';


const Layout = () => {


    return (
        <main className={`${classes.wrap} width`}>
            <section className={'width flex'}>
                <Header/>
            </section>

            <section className={`${classes.layoutBlock} flex width`}>
                <section className={`${classes.imgBlock}`}>
                    <img src={foto} alt="my img" className={`${classes.img}`}/>
                </section>

                <section className={`${classes.outletBlock} flex-direction`}>
                    <Outlet/>
                </section>

                <section className={`${classes.linkBlock} flex`}>
                    <LinksComponents/>
                </section>
            </section>
        </main>
    );
};

export {Layout};