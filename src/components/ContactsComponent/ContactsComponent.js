import React from 'react';
import {useTranslation} from "react-i18next";
import {LiaAtomSolid} from "react-icons/lia";

import classes from "./ContactsComponent.module.css";
import {IconRotate} from "../framerMotionComponents";


const ContactsComponent = () => {
    const {t} = useTranslation();

    return (
        <main className={`${classes.wrap} width flex-direction`}>
            <section className={`flex`}>
                <h1 className={`${classes.title}`}>{t('prt-contacts-title')}</h1>
                <IconRotate icon={LiaAtomSolid}/>
            </section>

            <h4 className={`${classes.secondTitle}`}>{t('prt-contacts-second-title')}</h4>

            <section className={`${classes.contactsBlock} flex-direction`}>
                <p className={`${classes.contactsBlockTitle} width`}>{t('prt-name')}</p>
                <p className={`${classes.contactsBlockTitleSecond} width`}>junior front-end developer</p>

                <p className={`${classes.contactsInfo} width`}>{t('prt-contacts-info-tel')}
                    <span className={`${classes.contactsInfoData}`}>+380984012056</span>
                </p>

                <p className={`${classes.contactsInfo} width`}>{t('prt-contacts-info-email')}
                    <span className={`${classes.contactsInfoData}`}>volodymyrkostiuk2021@gmail.com</span>
                </p>

                <p className={`${classes.contactsInfo} width`}>{t('prt-contacts-info-linkedIn')}
                    <span className={`${classes.contactsInfoData}`}>
                        <a href="https://www.linkedin.com/in/volodymyr-kostiuk-a35a16235/"
                           target={'_blank'}>volodymyr-kostiuk</a>
                    </span>
                </p>

                <p className={`${classes.contactsInfo} width`}>{t('prt-contacts-info-telegram')}
                    <span className={`${classes.contactsInfoData}`}>
                        <a href="https://t.me/kvm20232023" target={'_blank'}>@kvm20232023</a>
                    </span>
                </p>

                <p className={`${classes.contactsInfo} width`}>{t('prt-contacts-info-instagram')}
                    <span className={`${classes.contactsInfoData}`}>
                        <a href="https://www.instagram.com/volodumur_k_2023/" target={'_blank'}>volodumur_k_2023</a>
                    </span>
                </p>

                <p className={`${classes.contactsInfo} width`}>{t('prt-contacts-info-github')}
                    <span className={`${classes.contactsInfoData}`}>
                       <a href="https://github.com/VLK2021" target={'_blank'}>VLK2021</a>
                    </span>
                </p>

            </section>
        </main>
    );
};

export {ContactsComponent};