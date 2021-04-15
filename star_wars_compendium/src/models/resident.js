import {types} from 'mobx-state-tree';

export const Resident = types.model('Resident', {
    name: types.string,
    height: types.string,
    mass: types.string,
    hair_color: types.string,
    skin_color: types.string,
    eye_color: types.string,
    birth_year: types.string,
    gender: types.string,
})