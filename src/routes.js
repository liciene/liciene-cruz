import React from 'react';
import { Routes, Route } from 'react-router-dom';

import App from './App.js';
import ArtPage from './pages/art-page.jsx';
import DesignPage from './pages/design-page.jsx';
import DevPage from './pages/development-page.jsx';
import PhotographyPage from './pages/photography-page.jsx';
import Store from './pages/store.jsx';

function MyRoutes() {
    return (
        <Routes>
            <Route path="" element={<App/>}/>;
            <Route path="/arte" element={<ArtPage/>}/>;
            <Route path="/design" element={<DesignPage/>}/>;
            <Route path="/programacao" element={<DevPage/>}/>;
            <Route path="/fotografia" element={<PhotographyPage/>}/>;
            <Route path="/loja" element={<Store/>}/>;
        </Routes>
    );
}

export default MyRoutes;
