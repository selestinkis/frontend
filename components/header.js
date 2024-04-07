import React from 'react'
import * as ReactDOM from "react-dom/client";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link ,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Recepies from './recepies';
//import Recepies from "./recepies";


export default function Header() {


    return (
        <header>
            <div>
                <meta charset="utf-8" />
                <span className='logo'>Котята-поварята</span>
                <ul className='nav'>
                    <a href="/recepies" title="Здесь вы можете найти рецепты!!!!" target="_blank">Ингредиенты</a>
                    </ul>
            </div>
            
            <div className='presentation'></div>
        </header>
    )
}