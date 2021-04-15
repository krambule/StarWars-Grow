import { types } from 'mobx-state-tree';
import { Resident } from '../models/resident';

export const ResidentsModel = types.model('Residents', {
    people: types.array(Resident),
    selectedPerson: types.string,
})
    .actions(self => ({
        addResident(resident) {
            self.people.push(resident);
        },
        selectPerson(name) {
            self.selectedPerson = name;
        },
        clearPeople(){
            self.people = [];
        }

    }))