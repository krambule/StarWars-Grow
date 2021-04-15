import {types} from 'mobx-state-tree';

export const Planet = types.model('Planet', {
    name: types.string,
    residents: types.array(types.string),
})
.actions(self => ({
    setName(newName){
        self.name = newName;
    },
    setResidents(newResidents){
        self.residents = newResidents;
    }
}))