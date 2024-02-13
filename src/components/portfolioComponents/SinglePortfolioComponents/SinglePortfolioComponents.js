import React, {useState} from 'react';
import {BsArrowsFullscreen} from "react-icons/bs";

import classes from "./SinglePortfolioComponents.module.css";
import {PopUpComponent} from "../PopUpComponent/PopUpComponent";


const SinglePortfolioComponents = (props) => {
    const {obj: {name, technologies, image}} = props;

    const [isClicked, setIsClicked] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
    }


    return (
        <main className={`${classes.wrap} flex-direction`}>
            <section className={`${classes.imgBlock} width`} onMouseOver={() => setIsClicked(true)}
                     onMouseOut={() => setIsClicked(false)}>
                <img src={image} alt={`Project: ${name}`}/>

                {isClicked && (
                    <article className={`${classes.icon} flex`}>
                        <BsArrowsFullscreen onClick={handleClick}/>
                    </article>
                )}
            </section>

            <p className={`${classes.name} flex`}>{name}</p>

            <p className={`${classes.technologies} flex`}>{technologies}</p>

            {isOpen && <PopUpComponent setIsOpen={setIsOpen} obj={props.obj}/>}
        </main>
    );
};

export {SinglePortfolioComponents};