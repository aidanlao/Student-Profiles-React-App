import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Students from './routes/students';
import Admin from './routes/admin';
import {Provider} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/index.js';

const store = configureStore({
    reducer: appReducer,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App/> }>
                    <Route path="students" element={<Students />}/>
                    <Route path="admin" element={<Admin />}/>   
                 </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
    );