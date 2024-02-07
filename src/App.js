import {Routes, Route} from 'react-router-dom';

import {Layout} from "./Layout";
import {
    AboutComponent,
    ContactsComponent,
    LanguageComponent,
    MainComponent,
    PortfolioComponent,
    SkillsComponent
} from "./components";


function App() {

    return (
        <main>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<MainComponent/>}/>
                    <Route path={'about'} element={<AboutComponent/>}/>
                    <Route path={'skills'} element={<SkillsComponent/>}/>
                    <Route path={'language'} element={<LanguageComponent/>}/>
                    <Route path={'portfolio'} element={<PortfolioComponent/>}/>
                    <Route path={'contacts'} element={<ContactsComponent/>}/>
                </Route>
            </Routes>
        </main>
    );
}

export {App};
