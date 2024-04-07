import './App.css';
import React, { Component } from 'react';
import Header from "./components/header";
import {Routes, BrowserRouter as Router, Route  } from 'react-router-dom';
import Homepage from './pages/home';
import Search from './pages/search';
import RecepiesPage from './pages/recepiespg';




class App extends React.Component {
    

    render() {
        return (
            <div className="wrapper">
                <Router>
                    <Routes>
                        <Route path="/recepies" element={<Search />} />
                        <Route path="/" element={<Homepage />} />
                        <Route path="/Show" element={<RecepiesPage />} />
                    </Routes>
                </Router>
            </div >

        );
    }
}

export default App;
