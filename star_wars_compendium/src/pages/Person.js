import React, { useEffect, useState } from 'react';
import {getSnapshot} from 'mobx-state-tree';
import Header from '../components/Header';
import LargeTitle from '../components/LargeTitle';
import Breadcrumb from '../components/Breadcrumb';
import Breadcrumbs from '../components/Breadcrumbs';
import TwoColumns from '../components/TwoColumns';

export default function Person(props) {
    const [personalDetails, setPersonalDetails] = useState({});

    useEffect(() => {
        const personalData = props.residents.people.find((person) => {
            return (person.name === props.residents.selectedPerson)
        })
        setPersonalDetails(getSnapshot(personalData));
    },[])
    return (
        <div className='App'>
            <Header>
                <LargeTitle>{personalDetails.name}</LargeTitle>
                <Breadcrumbs>
                    <Breadcrumb link={'/'}>All Planets</Breadcrumb>
                    <p> &gt; </p>
                    <Breadcrumb link={'/residents'}>{props.universe.selectedPlanet}</Breadcrumb>
                    <p> &gt; </p>
                    <Breadcrumb link={''}>{personalDetails.name}</Breadcrumb>
                </Breadcrumbs>
            </Header>
            <TwoColumns label={'Name'} data={personalDetails.name} />
            <TwoColumns label={'Height'} data={personalDetails.height} />
            <TwoColumns label={'Mass'} data={personalDetails.mass} />
            <TwoColumns label={'Hair Color'} data={personalDetails.hair_color} />
            <TwoColumns label={'Skin color'} data={personalDetails.skin_color} />
            <TwoColumns label={'Eye color'} data={personalDetails.eye_color} />
            <TwoColumns label={'Birth Year'} data={personalDetails.birth_year} />
            <TwoColumns label={'Gender'} data={personalDetails.gender} />
        </div>
    )
}
