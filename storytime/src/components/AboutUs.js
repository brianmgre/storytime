import React from 'react';


const AboutUs = props => {
    console.log('AboutUs', props);

    return (
        <div className='aboutUs'>
            <img src='https://readstorytime.com/images/screen_couple_above_v2.png' className="aboutusIpad" alt="stIpad" />
            <div className='aboutUsText'>
                <h2>About Us</h2>
                <p>{props.data.AboutUs}</p>
            </div>
        </div>
    )
};

export default AboutUs;