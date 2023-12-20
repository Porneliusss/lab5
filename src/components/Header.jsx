import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './../styles/header.css';
import Home from './../pages/Home'
import QualityControls from '../pages/QualityControls';
import SchedulePage from '../pages/SchedulePage';
import QuestionsPage from '../pages/QuestionsPage';

const Header = () => {
    return ( 
        <>
            <Router>
            <nav className="navbar navbar-expand-lg  header-container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Учет качества продукции</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="/">Главная</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/qualityControls">Контроли качества продукции</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/schedule">График контролей качества продукции</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href='/questions'>Вопросы</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route exect path='/qualityControls' element={<QualityControls/>}/>
                    <Route exect path='/schedule' element={<SchedulePage/>}/>
                    <Route exect path='/questions' element={<QuestionsPage/>}/> 
                </Routes>
            </Router>
        </>
        
     );
}
 
export default Header;