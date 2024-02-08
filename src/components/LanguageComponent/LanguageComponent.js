import React from 'react';
import {TbBrandRedux} from "react-icons/tb";
import {useTranslation} from "react-i18next";

import classes from "./LanguageComponent.module.css";
import {IconRotate} from "../framerMotionComponents";
import {CircleForLanguage, LanguageSingleHelperComponent} from "../../helpers";


const LanguageComponent = () => {
    const {t} = useTranslation();

    return (
        <main className={`${classes.wrap} width  flex-direction`}>
            <section className={`flex`}>
                <h1 className={`${classes.title}`}>{t('prt-language-title')}</h1>
                <IconRotate icon={TbBrandRedux}/>
            </section>

            <h4 className={`${classes.secondTitle}`}>{t('prt-language-second-title')}</h4>

            <section className={`${classes.languageBlock} width`}>
                <article className={`${classes.languageBlockSingleWrap} flex-direction`}>
                    <LanguageSingleHelperComponent title={t('prt-language-single-title')}
                                                   body={t('prt-language-second-single-title')}
                    />

                    <section className={`${classes.circleBlock} width flex`}>
                        <CircleForLanguage currentColor={`#25ba9f`}/>
                        <CircleForLanguage currentColor={`#25ba9f`}/>
                        <CircleForLanguage currentColor={`#25ba9f`}/>
                        <CircleForLanguage currentColor={`#25ba9f`}/>
                        <CircleForLanguage currentColor={`#25ba9f`}/>
                    </section>
                </article>

                <article className={`${classes.languageBlockSingleWrap} flex-direction`}>
                    <LanguageSingleHelperComponent title={t('prt-language-single-title1')}
                                                   body={t('prt-language-second-single-title1')}
                    />

                    <section className={`${classes.circleBlock} width flex`}>
                        <CircleForLanguage currentColor={`#25ba9f`}/>
                        <CircleForLanguage currentColor={`#25ba9f`}/>
                        <CircleForLanguage currentColor={`#25ba9f`}/>
                        <CircleForLanguage currentColor={`#696b68`}/>
                        <CircleForLanguage currentColor={`#696b68`}/>
                    </section>
                </article>

                <article className={`${classes.languageBlockSingleWrap} flex-direction`}>
                    <LanguageSingleHelperComponent title={t('prt-language-single-title2')}
                                                   body={t('prt-language-second-single-title2')}
                    />

                    <section className={`${classes.circleBlock} width flex`}>
                        <CircleForLanguage currentColor={`#25ba9f`}/>
                        <CircleForLanguage currentColor={`#25ba9f`}/>
                        <CircleForLanguage currentColor={`#25ba9f`}/>
                        <CircleForLanguage currentColor={`#696b68`}/>
                        <CircleForLanguage currentColor={`#696b68`}/>
                    </section>
                </article>

                <article className={`${classes.languageBlockSingleWrap} flex-direction`}>
                    <LanguageSingleHelperComponent title={t('prt-language-single-title3')}
                                                   body={t('prt-language-second-single-title3')}
                    />

                    <section className={`${classes.circleBlock} width flex`}>
                        <CircleForLanguage currentColor={`#25ba9f`}/>
                        <CircleForLanguage currentColor={`#25ba9f`}/>
                        <CircleForLanguage currentColor={`#696b68`}/>
                        <CircleForLanguage currentColor={`#696b68`}/>
                        <CircleForLanguage currentColor={`#696b68`}/>
                    </section>
                </article>

            </section>
        </main>
    );
};

export {LanguageComponent};