import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';

import App from './App.js';
import ArtPage from './pages/art-page.jsx';
import DesignPage from './pages/design-page.jsx';
import DevPage from './pages/development-page.jsx';
import PhotographyPage from './pages/photography-page.jsx';
import Store from './pages/store.jsx';

function MyRoutes() {
    return (
        <Routes>
            <Route path='/liciene-cruz'>
                <Route path="" element={<App/>}/>;
                <Route path="arte" element={<ArtPage/>}/>;
                <Route path="design" element={<DesignPage/>}/>;
                <Route path="programacao" element={<DevPage/>}/>;
                <Route path="fotografia" element={<PhotographyPage/>}/>;
                <Route path="loja" element={<Store/>}/>;
                <Route path="*" element={<Navigate to="" replace/>}/>
            </Route>
        </Routes>
    );
}

export default MyRoutes;
