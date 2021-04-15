import React, { useEffect, useState } from 'react'
import { getResidents } from '../services/services';
import ListItem from '../components/ListItem';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import LargeTitle from '../components/LargeTitle';
import Loader from 'react-loader-spinner';
import Breadcrumb from '../components/Breadcrumb';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Residents(props) {
    const [update, setUpdate] = useState(0);
    const [planetName, setPlanetName] = useState('');
    const [fetchComplete, setFetchComplete] = useState(false);

    useEffect(() => {
        async function fetchResidentsData() {
            setFetchComplete(false);
            setPlanetName(props.universe.selectedPlanet);

            const planetData = props.universe.planets.find((planet) => {
                return (planet.name === props.universe.selectedPlanet);
            })
            const residentsList = planetData.residents;
            await getResidents(residentsList, props.residents);

            setFetchComplete(true);
            setUpdate(update + 1);
        }
        fetchResidentsData();
    }, [])

    const residentsList = () => {
        if (fetchComplete) {
            if (props.residents.people.length > 0) {
                return props.residents.people.map((person, i) => {
                    return (
                        <div key={i} onClick={() => {
                            props.residents.selectPerson(person.name);
                        }}>
                            <Link to='/person'>
                                <ListItem >{person.name}</ListItem>
                            </Link>
                        </div>
                    )
                })
            }
            else {
                return <p>There are no residents on {planetName}</p>
            }
        }
        else {
            return (
                <Loader
                    type='Circles'
                    color='#999'
                    height={100}
                    width={100}
                    timeout={2000}
                />
            )
        }
    }
    return (
        <div className='App'>
            <Header>
                <LargeTitle>{planetName.toUpperCase()} RESIDENTS</LargeTitle>
                <Breadcrumbs>
                    <Breadcrumb link={'/'}>All Planets</Breadcrumb>
                    <p> &gt; </p>
                    <Breadcrumb link={''}>{planetName}</Breadcrumb>
                </Breadcrumbs>
            </Header>
            {residentsList()}
        </div>
    )
}
