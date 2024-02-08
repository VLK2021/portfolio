import React from 'react';
import {useTranslation} from "react-i18next";
import {AiOutlineHtml5} from "react-icons/ai";
import {TbBrandCss3} from "react-icons/tb";
import {TbBrandJavascript} from "react-icons/tb";
import {FaReact} from "react-icons/fa6";
import {RiAngularjsLine} from "react-icons/ri";
import {VscGithub} from "react-icons/vsc";
import {TbBrandTypescript} from "react-icons/tb";
import {BsDatabase} from "react-icons/bs";
import {FaNodeJs} from "react-icons/fa";

import classes from "./SkillsComponent.module.css";
import {SkillsSingleHelperComponent} from "../../helpers";
import {HtmlData} from "../../data/htmlData";
import {CssData} from "../../data/cssData";
import {JsData} from "../../data/jsData";
import {ReactData} from "../../data/reactData";
import {AngularData} from "../../data/angularData";
import {GithubData} from "../../data/githubData";
import {TypescriptData} from "../../data/typescriptData";
import {DatabaseData} from "../../data/databaseData";
import {NodeData} from "../../data/nodeData";
import {IconRotate} from "../framerMotionComponents";


const SkillsComponent = () => {
    const {t} = useTranslation();

    return (
        <main className={`${classes.wrap} width flex-direction`}>
            <section className={`flex`}>
                <h1 className={`${classes.title}`}>{t('prt-skills-title')}</h1>
                <IconRotate icon={FaReact}/>
            </section>

            <h4 className={`${classes.secondTitle}`}>{t('prt-skills-second-title')}</h4>

            <section className={`${classes.skillsBlock} width`}>
                <article className={`${classes.skillsBlockSingleWrap} flex-direction`}>
                    <SkillsSingleHelperComponent icon={AiOutlineHtml5} skills={HtmlData}/>
                </article>

                <article className={`${classes.skillsBlockSingleWrap} flex-direction`}>
                    <SkillsSingleHelperComponent icon={TbBrandCss3} skills={CssData}/>
                </article>

                <article className={`${classes.skillsBlockSingleWrap} flex-direction`}>
                    <SkillsSingleHelperComponent icon={TbBrandJavascript} skills={JsData}/>
                </article>

                <article className={`${classes.skillsBlockSingleWrap} flex-direction`}>
                    <SkillsSingleHelperComponent icon={FaReact} skills={ReactData}/>
                </article>

                <article className={`${classes.skillsBlockSingleWrap} flex-direction`}>
                    <SkillsSingleHelperComponent icon={RiAngularjsLine} skills={AngularData}/>
                </article>

                <article className={`${classes.skillsBlockSingleWrap} flex-direction`}>
                    <SkillsSingleHelperComponent icon={VscGithub} skills={GithubData}/>
                </article>

                <article className={`${classes.skillsBlockSingleWrap} flex-direction`}>
                    <SkillsSingleHelperComponent icon={FaNodeJs} skills={NodeData}/>
                </article>

                <article className={`${classes.skillsBlockSingleWrap} flex-direction`}>
                    <SkillsSingleHelperComponent icon={TbBrandTypescript} skills={TypescriptData}/>
                </article>

                <article className={`${classes.skillsBlockSingleWrap} flex-direction`}>
                    <SkillsSingleHelperComponent icon={BsDatabase} skills={DatabaseData}/>
                </article>
            </section>
        </main>
    );
};

export {SkillsComponent};