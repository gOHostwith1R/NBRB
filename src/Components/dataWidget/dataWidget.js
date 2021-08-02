import React from 'react';
import './dataWidget.css';

const DateWidget = ({startDate, endDate}) => {
    return (
        <div className='date'>
            <div className='start-date'>
                <label>Start Date:</label>
                <input type='date'
                       onChange={startDate}/>
            </div>
            <div className='end-date'>
                <label>End Date:</label>
                <input type='date'
                       onChange={endDate}
                />
            </div>
        </div>
    )
}

export default DateWidget;