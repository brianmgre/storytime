import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
import HomePage from './HomePage';
import FaqPage from './FaqPage';
import News from './News';

const Nav = props => {
    console.log('Nav', props)
    return (
        <div>
            <NavLink to='/'>
                <img src='https://readstorytime.com/images/logo_nav@2x.png'
                    className="storyTimeLogo" alt="logo" />
            </NavLink>
            <nav>
                <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to='features'
                    smooth={true}>
                    <NavLink to='/'>Features</NavLink>
                </Link>
                <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to='video'
                    smooth={true}>
                    <NavLink to='/'>Video</NavLink>
                </Link>
                <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to='aboutUs'
                    smooth={true}>
                    <NavLink to='/'>About Us</NavLink>
                </Link>
                <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to='honor'
                    smooth={true}>
                    <NavLink to='/'>Honor</NavLink>
                </Link>
                <NavLink to='/faq'>FAQ</NavLink>
                <NavLink to='/news'> News</NavLink>
            </nav>
            <section>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/faq' component={FaqPage} />
                    <Route path='/news' component={News} />
                </Switch>
            </section>
        </div>
    )
}




export default Nav;