import React from 'react';

import classes from "./Layout.module.css";
import {Header} from "../components";
import {NameComponent} from "../components/headerComponents";


const Layout = () => {


    return (
        <main className={`${classes.wrap} width`}>
            <section className={'width flex'}>
                <Header/>
            </section>


        </main>
    );
};

export {Layout};