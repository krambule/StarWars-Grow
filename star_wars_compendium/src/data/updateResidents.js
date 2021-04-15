import {Resident} from '../models/resident';

export default function updateResidents(residentData, residentState){
    residentState.addResident(Resident.create({
        name: residentData.name,
        height: residentData.height,
        mass: residentData.mass,
        hair_color: residentData.hair_color,
        skin_color: residentData.skin_color,
        eye_color: residentData.eye_color,
        birth_year: residentData.birth_year,
        gender: residentData.gender,
    }))
}