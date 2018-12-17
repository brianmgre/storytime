import React from 'react';
import '../css/honor.css';

const Honor = props => {
    console.log('Honor', props);

    return (
        <div className='stHonor'id='honor'>
            <img src='https://readstorytime.com/images/Folds%20of%20honor-min.png' className="folds" alt="folds of honor" />
            <p>{props.data.Folds}</p>
        </div>
    )
};

export default Honor;