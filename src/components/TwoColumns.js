import React from 'react';
import './TwoColumns.sass';

export default function TwoColumns(props) {
    return (
        <div className='twoColumn'>
            <div className='column'>
                <p className='labels'>{props.label}</p>
            </div>
            <div className='column'>
                <p className='data'>{props.data}</p>
            </div>
        </div>
    )
}
