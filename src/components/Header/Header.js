import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {IoMenu} from "react-icons/io5";

import classes from "./Header.module.css";
import {NameComponent, UlComponent, UlMediaComponent} from "../headerComponents";


const Header = () => {
    const {t, i18n} = useTranslation();

    const [showMenu, setShowMenu] = useState(false);

    const langHandler = (e) => {
        i18n.changeLanguage(e.target.value === 'ua' ? 'ua' : 'en')
    }

    const handleDownload = () => {
        // Встановлюємо шлях до PDF-файлу у папці public
        const pdfFilePath = '/files/KostiukVolodymyrCV.pdf';

        // Створюємо посилання для завантаження файлу
        const downloadLink = document.createElement('a');
        downloadLink.href = pdfFilePath;
        downloadLink.download = 'KostiukVolodymyrCV.pdf';

        // Додаємо посилання до документу і клікаємо на нього
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };


    return (
        <main className={`${classes.wrap} flex`}>
            <section>
                <NameComponent/>
            </section>

            <nav>
                <UlComponent/>
            </nav>

            <section className={`${classes.menuIcon} flex`}>
                <IoMenu onClick={() => setShowMenu(!showMenu)}/>

                {showMenu &&
                <article className={`${classes.menuMedia} flex-direction`}>
                    <UlMediaComponent setShowMenu={setShowMenu}/>

                    <button className={`${classes.btnMedia} flex`} onClick={handleDownload}>{t('prt-header-name')}</button>
                </article>
                }
            </section>

            <section className={`flex`}>
                <article className={`margin-right`}>
                    <select onChange={langHandler} className={`${classes.select}`}>
                        <option value={"en"} className={`${classes.option}`}>EN</option>
                        <option value={"ua"} className={`${classes.option}`}>UA</option>
                    </select>
                </article>

                <button className={`${classes.btn} flex`} onClick={handleDownload}>{t('prt-header-name')}</button>
            </section>
        </main>
    );
};

export {Header};