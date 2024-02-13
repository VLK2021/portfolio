import React from 'react';
import {Link} from 'react-router-dom';
import { RiCloseLine } from "react-icons/ri";

import classes from "./PopUpComponent.module.css";



const PopUpComponent = (props) => {
    const {setIsOpen, obj:{name, technologies, link, video}} = props;


    return (
        <main className={`${classes.wrap} flex-direction`}>
            <section className={`${classes.block}`}>
                <video width="540" height="300" controls>
                    <source src={video} type="video/mp4" />
                </video>

                <p className={`${classes.name}`}>{name}</p>

                <p className={`${classes.technologies}`}>{technologies}</p>

                <article className={`${classes.blockBtn} flex`}>
                    <Link to={link} target="_blank">
                        <button className={`${classes.linkBtn}`}>link</button>
                    </Link>

                    <button className={`${classes.closeBtn}`} onClick={() => setIsOpen(false)}>close</button>
                </article>
            </section>
        </main>
    );
};

export {PopUpComponent};