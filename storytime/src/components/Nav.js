import React from 'react';
import {  Route, NavLink } from 'react-router-dom';
import HomePage from './HomePage';
import FaqPage from './FaqPage';
import News from './News';

const Nav = props => {
    console.log('Nav', props)
        return (
            <div>
                <img src='https://readstorytime.com/images/logo_nav@2x.png' className="storyTimeLogo" alt="logo" />
                <nav>
                <NavLink to='/'>Features</NavLink>
                <NavLink to='/'>Video</NavLink>
                <NavLink to='/'>About Us</NavLink>
                <NavLink to='/'>Honor</NavLink>
                <NavLink to='/faq'>FAQ</NavLink>
                <NavLink to='/news'>News</NavLink>
                <NavLink to='/'>Subscribe</NavLink>            
                </nav>
                <section>
                    <Route exact path ='/' compontent={HomePage} />
                    <Route path='/faq' compontent={FaqPage} />
                    <Route path='/news' compontent={News} />
                </section>
             </div>
             )
    }




export default Nav;