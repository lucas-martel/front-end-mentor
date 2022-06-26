import React from 'react';
import Dropdown from './Dropdown';

import './Navbar.css';

import TodoList from './imgs/icon-todo.svg'
import Calendar from './imgs/icon-calendar.svg'
import Reminder from './imgs/icon-reminders.svg'
import Planning from './imgs/icon-planning.svg'
import iconMenu from './imgs/icon-menu.svg'
import iconCloseMenu from './imgs/icon-close-menu.svg'

const Navbar = ({windowIsMobile}) => {
    const feature_options = [
        { name: 'Todo List', symbol: TodoList },
        { name: 'Calendar', symbol: Calendar },
        { name: 'Reminders', symbol: Reminder },
        { name: 'Planning', symbol: Planning }
    ];

    const company_options = [
        { name: 'History', symbol: null },
        { name: 'Our Team', symbol: null },
        { name: 'Blog', symbol: null },
    ]

    document.body.onresize = () => {
        let navbar_container = document.querySelector('.navbar-container')
        if(windowIsMobile()){
            navbar_container.style.display = 'none'    
            return;
        }
        
        navbar_container.style.display = 'flex' 
        let focusBackground = document.querySelector('.focus-background')
        focusBackground.style.display = "none"
    }

    const handleSideBarMenuClick = () => {
        let navbar_container = document.querySelector('.navbar-container')
        navbar_container.style.display = 'flex' 
        let closeBtn = document.querySelector('.close-icon')
        closeBtn.style.display = 'block'
        let focusBackground = document.querySelector('.focus-background')
        focusBackground.style.display = "block"
    }

    const handleCloseSideBarMenuClick = () => {
        let navbar_container = document.querySelector('.navbar-container')
        navbar_container.style.display = 'none'
        let focusBackground = document.querySelector('.focus-background')
        focusBackground.style.display = "none"
    }

    return (
        <>
            <div className="focus-background"></div>
            <button
                onClick={handleSideBarMenuClick} 
                id="sidebar">
                <img className='image-icon' src={iconMenu} alt=""/>
            </button>
            <nav className='navbar-container'>
                <button
                    onClick={handleCloseSideBarMenuClick} 
                    id='close-menu'>
                        <img className='close-icon' src={iconCloseMenu} alt=""/>
                </button>
                <div className='navbar-item'>
                    <Dropdown
                        id={'feature'}
                        title="Features"
                        options={feature_options} />
                </div>
                <div className='navbar-item'>
                    <Dropdown
                        id={'company'}
                        title="Company"
                        options={company_options} />
                </div>
                <div className="navbar-item"><button>Carrers</button></div>
                <div className="navbar-item"><button>About</button></div>
                <div className='login-container'>
                    <button className="login-button">Login</button>
                    <button className="register">Register</button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;