import React from 'react';
import Intro from './Intro';
import Features from './Features';
import Video from './Video';
import AboutUs from './AboutUs';
import Honor from './Honor';

const HomeContainer = props => {
    return (
        <div>

            <Intro data={props.data} />
            <Features data={props.data} />
            <Video data={props.data} />
            <AboutUs data={props.data} />
            <Honor data={props.data} />
            <div className='download'>
                <h3>Download App</h3>
            </div>

        </div>
    );
};

export default HomeContainer;