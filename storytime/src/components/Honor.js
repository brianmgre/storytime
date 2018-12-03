import React from 'react';



const Honor = props => {
    console.log('Honor', props);

    return (
        <div className='stHonor'>
            <img src='https://readstorytime.com/images/Folds%20of%20honor-min.png' className="aboutusIpad" alt="stIpad" />
            <p>{props.data.Folds}</p>
        </div>
    )
};

export default Honor;