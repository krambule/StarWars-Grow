import React, { useEffect, useState } from 'react'
import { getPlanets } from '../services/services';
import ListItem from '../components/ListItem';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import LargeTitle from '../components/LargeTitle';
import Search from '../components/Search';
import Loader from 'react-loader-spinner';

export default function Home(props) {
    const [filter, setFilter] = useState('');
    const [update, setUpdate] = useState(0);

    useEffect(() => {
        async function fetchPlanetData() {
            await getPlanets(props.universe);
            setUpdate(update + 1);
        }
        fetchPlanetData();
    },[]);


    const planetsSection = () => {
        if (props.universe.planets.length > 0) {
            if (filter !== '') {
                return filteredPlanetList();
            }
            else {
                return planetList();
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

    const filteredPlanetList = () => {
        const filteredPlanets = props.universe.planets.filter((planet) => {
            return planet.name.toLowerCase().includes(filter.toLowerCase());
        })
        return filteredPlanets.map((planet, i) => {
            return (
                <div key={i} onClick={() => {
                    props.universe.selectPlanet(planet.name);
                }}>
                    <Link to='/residents'>
                        <ListItem >{planet.name}</ListItem>
                    </Link>
                </div>
            )
        })
    }

    const planetList = () => {
        return props.universe.planets.map((planet, i) => {
            return (
                <div key={i} onClick={() => {
                    console.log(planet.name);
                    props.universe.selectPlanet(planet.name);
                }}>
                    <Link to='/residents'>
                        <ListItem >{planet.name}</ListItem>
                    </Link>
                </div>
            )
        })
    }

    return (
        <div className='App'>
            <Header>
                <LargeTitle>ALL PLANETS</LargeTitle>
                <Search setFilter={setFilter} />
            </Header>
            {
                planetsSection()
            }
        </div>
    )

}