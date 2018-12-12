import React from 'react';
import '../css/features.css';

const Features = props => {
    console.log('Features', props);

    return (
        <div className='features-container'>
            <div className='features-section' id='features'>
                <div className='features-intro'>
                    <h2>StoryTime</h2>
                    <p>{props.data.featDesc}</p>
                </div>
                <div className='featureDetails'>
                    <h3>READwithME</h3>
                    <p>{props.data.rwmFeat}</p>
                    <h3>Thousands of Books</h3>
                    <p>{props.data.bookFeat}</p>
                    <h3>iOS</h3>
                    <p>{props.data.iosFeat}</p>
                    <img src='https://readstorytime.com/images/features_screen.png' className="storyTimeIphone" alt="logo" />
                    <h3>Subscription Service</h3>
                    <p>{props.data.subServiceFeat}</p>
                    <h3>Educational</h3>
                    <p>{props.data.eduFeat}</p>
                    <h3>Children's Books</h3>
                    <p>{props.data.childBookFeat}</p>
                </div>
            </div>
        </div>
    )
};

export default Features;