import React from 'react'
import './Header.sass';

export default function Header(props) {
    return (
        <div className='headerContainer'>
            {props.children}
        </div>
    )
}
