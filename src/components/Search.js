import React from 'react'
import searchIcon from '../media/search.png';
import './Search.sass';

export default function Search(props) {
    return (
        <div className='inputContainer'>
                <input className='input' type='text' onChange={(event) => { props.setFilter(event.target.value) }}></input>
                <img className='searchIcon' height={11} width={11} src={searchIcon} alt="search icon"/>
        </div>
    )
}
