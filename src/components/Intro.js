import React from 'react';
import '../css/intro.css';

const Intro = props => {
    console.log('intro', props);

    return (
        <div className='intro-container'>
            <div className='intro'>
                <div className='intro-logo-tag'>
                    <img src='https://readstorytime.com/images/logo@2x.png' className="storyClearLogo" alt="logo" />
                    <h1>{props.data.tagLine}</h1>
                </div>
                <img src='https://readstorytime.com/images/intro_screen.png' className="storyTimeIphone" alt="logo" />
            </div>
        </div>
    )
};

export default Intro;