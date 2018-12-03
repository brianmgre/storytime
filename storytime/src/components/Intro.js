import React from 'react';



const Intro = props =>{
    console.log('intro', props);

    return(
        <div className='intro'>
        <img src='https://readstorytime.com/images/logo@2x.png' className="storyClearLogo" alt="logo" />
         <h1>{props.data.tagLine}</h1>
         <img src='https://readstorytime.com/images/intro_screen.png' className="storyTimeIphone" alt="logo" />

        </div>
    )
};

export default Intro;