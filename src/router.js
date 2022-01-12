import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from './components/Layout';
import LoginPage from './components/LoginPage';
import MainFrame from './components/MainFrame';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<MainFrame/>}/>
                    <Route path="/auth" element={<LoginPage/>}/>
                    {/* <Route path='*' element=''/> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;