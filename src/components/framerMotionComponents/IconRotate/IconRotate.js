import React from 'react';
import {motion} from "framer-motion";

import classes from "./IconRotate.module.css";


const IconRotate = (props) => {
    const {icon: IconComponent} = props;


    return (
        <motion.div animate={{rotate: 360}}
                    transition={{
                        duration: 5,          // Тривалість одного оберту (у секундах)
                        repeat: Infinity,     // Кількість повторень (безкінечність)
                        ease: 'linear'
                    }}
                    className={`${classes.wrap}`}
        >
            <IconComponent/>
        </motion.div>
    );
};

export {IconRotate};