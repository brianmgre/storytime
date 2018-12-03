import React from 'react';



const Footer = props => {
    console.log('Footer', props);

    return (
        <div className='Footer'>
            <img src='https://readstorytime.com/images/logo_small@2x.png' className="stLogo" alt="STLogo" />
            <img src='https://readstorytime.com/images/Pearlwestie.png' className="FooterPic" alt="PearlJam" />
            <div className='FooterText'>
                <p>2017 StoryTime</p>
                <p>Designed by StoryTime Inc.</p>
            </div>
        </div>
    )
};

export default Footer;