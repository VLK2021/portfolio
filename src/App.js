import {Routes, Route, Navigate} from 'react-router-dom';

import {Layout} from "./Layout";
import {
    AboutComponent,
    ContactsComponent,
    LanguageComponent,
    MainComponent,
    PortfolioComponent,
    SkillsComponent
} from "./components";
import {
    AllPortfolioComponent,
    AngularPortfolioComponent, FullstackPortfolioComponent, JavascriptPortfolioComponent,
    ReactPortfolioComponent
} from "./components/portfolioComponents";


function App() {

    return (
        <main>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<MainComponent/>}/>
                    <Route path={'about'} element={<AboutComponent/>}/>
                    <Route path={'skills'} element={<SkillsComponent/>}/>
                    <Route path={'language'} element={<LanguageComponent/>}/>
                    <Route path={'portfolio'} element={<PortfolioComponent/>}>
                        <Route index element={<Navigate to={'all'}/>}/>
                        <Route path={'all'} element={<AllPortfolioComponent/>}/>
                        <Route path={'react'} element={<ReactPortfolioComponent/>}/>
                        <Route path={'angular'} element={<AngularPortfolioComponent/>}/>
                        <Route path={'javascript'} element={<JavascriptPortfolioComponent/>}/>
                        <Route path={'fullstack'} element={<FullstackPortfolioComponent/>}/>
                    </Route>
                    <Route path={'contacts'} element={<ContactsComponent/>}/>
                </Route>
            </Routes>
        </main>
    );
}

export {App};
