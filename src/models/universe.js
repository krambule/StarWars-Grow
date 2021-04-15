import {types} from 'mobx-state-tree';
import {Planet} from './planet';

export const Universe = types.model('Universe', {
    planets: types.array(Planet),
    selectedPlanet: types.string,
})
.actions(self => ({
    setPlanets(nextPlanets) {
        self.planets = nextPlanets;
    },
    addPlanet(inputName, inputResidents){
        self.planets.push(Planet.create({
            name: inputName,
            residents: inputResidents,
        }))
    },
    selectPlanet(inputName){
        self.selectedPlanet = inputName;
    },
    clearPlanets(){
        self.planets = [];
    }
}))