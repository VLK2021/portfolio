import React from 'react';
import {Link} from 'react-router-dom';

import classes from "./PopUpComponent.module.css";



const PopUpComponent = (props) => {
    const {setIsOpen, obj:{name, technologies, link, video, code}} = props;


    return (
        <main className={`${classes.wrap} flex`}>
            <section className={`${classes.block} flex-direction`}>
                <video width="80%" height="300" controls>
                    <source src={video} type="video/mp4" />
                </video>

                <p className={`${classes.name}`}>{name}</p>

                <p className={`${classes.technologies}`}>{technologies}</p>

                <article className={`${classes.blockBtn} flex width`}>
                    <Link to={link} target="_blank">
                        <button className={`${classes.linkBtn}`}>deploy</button>
                    </Link>

                    <Link to={code} target="_blank">
                        <button className={`${classes.linkCodeBtn}`}>code</button>
                    </Link>

                    <button className={`${classes.closeBtn}`} onClick={() => setIsOpen(false)}>close</button>
                </article>
            </section>
        </main>
    );
};

export {PopUpComponent};