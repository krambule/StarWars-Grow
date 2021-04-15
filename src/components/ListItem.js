import React from 'react';
import './ListItem.sass';

export default function ListItem(props) {
    return (
            <div>
                <p className='listText'>{props.children}</p>
            </div>
    )
}
