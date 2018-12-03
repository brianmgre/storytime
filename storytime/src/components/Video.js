import React from 'react';



const Video = props => {
    console.log('Video', props);

    return (
        <div>
            <h2>How StoryTime Works</h2>
            <iframe width="560" height="315"
                src="https://www.youtube.com/embed/c3Amjp7AHB0?rel=0&amp;showinfo=0"
                frameborder="0" allowfullscreen
                className='storyVideo'>
            </iframe>
        </div>
    )
};

export default Video;