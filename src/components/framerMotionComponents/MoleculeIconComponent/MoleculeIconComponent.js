import React, {useEffect, useState} from 'react';
import {SiMoleculer} from "react-icons/si";
import {motion} from "framer-motion";

import classes from "./MoleculeIconComponent.module.css";


const MoleculeIconComponent = () => {
    const colors = ['#fcfcfc', '#25ba9f', '#696b68'];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % colors.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const currentColors = colors[currentIndex];


    return (
        <motion.main className={`${classes.wrap}`}
                     style={{color: currentColors}}
                     animate={{rotate: 360}}
                     transition={{
                         duration: 5,
                         repeat: Infinity,
                         ease: 'linear'
                     }}
        >
            <SiMoleculer/>
        </motion.main>
    );
};

export {MoleculeIconComponent};