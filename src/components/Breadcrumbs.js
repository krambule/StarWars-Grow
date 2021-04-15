import React from 'react';
import './Breadcrumbs.sass';

export default function Breadcrumbs(props) {
    return (
        <div className='breadcrumbContainer'>
            {props.children}
        </div>
    )
}
