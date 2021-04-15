import React from 'react';
import './LargeTitle.sass';

export default function LargeTitle(props) {
    return (
        <div className="largeTitleContainer">
            <h1 className="largeTitleFont">{props.children}</h1>
        </div>
    )
}
