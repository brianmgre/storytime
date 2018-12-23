import React from 'react';
import Intro from './Intro';
import Features from './Features';
import Video from './Video';
import AboutUs from './AboutUs';
import Honor from './Honor';
import '../css/homeContainer.css';

const HomeContainer = props => {
    return (
        <div>
            <Intro data={props.data} />
            <Features data={props.data} />
            <Video data={props.data} />
            <AboutUs data={props.data} />
            <Honor data={props.data} />
            <div className='download'>
                <h3>Download StoryTime</h3>
            </div>

        </div>
    );
};

export default HomeContainer;