import React from 'react'
import { Link } from 'react-router-dom';
import './Breadcrumb.sass';


export default function Breadcrumb(props) {
    if (props.link !== '') {
        return (
            <Link to={props.link}>
                <p className='crumbText crumbLink'>{props.children}</p>
            </Link>
        )
    }
    else {
        return (
            <p className='crumbText'>{props.children}</p>
        )
    }
}
