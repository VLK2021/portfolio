import React from 'react';
import {useTranslation} from "react-i18next";
import {AiOutlineHtml5} from "react-icons/ai";
import {TbBrandCss3} from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { RiAngularjsLine } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";

import classes from "./SkillsComponent.module.css";
import {SkillsSingleHelperComponent} from "../../helpers";
import {HtmlData} from "../../data/htmlData";
import {CssData} from "../../data/cssData";
import {JsData} from "../../data/jsData";
import {ReactData} from "../../data/reactData";
import {AngularData} from "../../data/angularData";


const SkillsComponent = () => {
    const {t} = useTranslation();

    return (
        <main className={`${classes.wrap} width flex-direction`}>
            <h1 className={`${classes.title}`}>{t('prt-skills-title')}</h1>

            <h3 className={`${classes.secondTitle}`}>{t('prt-skills-second-title')}</h3>

            <section className={`${classes.skillsBlock} width`}>
                <article  className={`${classes.skillsBlockSingleWrap} flex-direction`}>
                    <SkillsSingleHelperComponent icon={AiOutlineHtml5} skills={HtmlData}/>
                </article>


                <article  className={`${classes.skillsBlockSingleWrap} flex-direction`}>
                    <SkillsSingleHelperComponent icon={TbBrandCss3} skills={CssData}/>
                </article>

                <article  className={`${classes.skillsBlockSingleWrap} flex-direction`}>
                    <SkillsSingleHelperComponent icon={TbBrandJavascript} skills={JsData}/>
                </article>

                <article  className={`${classes.skillsBlockSingleWrap} flex-direction`}>
                    <SkillsSingleHelperComponent icon={FaReact} skills={ReactData}/>
                </article>

                <article  className={`${classes.skillsBlockSingleWrap} flex-direction`}>
                    <SkillsSingleHelperComponent icon={RiAngularjsLine} skills={AngularData}/>
                </article>

                <article  className={`${classes.skillsBlockSingleWrap} flex-direction`}>
                    <SkillsSingleHelperComponent icon={VscGithub}/>
                </article>
            </section>
        </main>
    );
};

export {SkillsComponent};