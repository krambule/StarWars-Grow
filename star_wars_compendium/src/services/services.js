import updatePlanets from '../data/updatePlanets';
import updateResidents from '../data/updateResidents';

export async function getPlanets(planetsState) {
    planetsState.clearPlanets();
    let planetsUrl = 'https://swapi.dev/api/planets/';
    let previousResults = [];
    let page = 1;
    do {
        try {
            const response = await fetch(planetsUrl + '?page=' + page);
            const planetsData = await response.json();
            previousResults = planetsData;
            updatePlanets(planetsData, planetsState);
            page++;
        }
        catch (error) {
            alert('Something went wrong when fetching data!' + error);
        }
    }
    while (previousResults.next !== null)
}

export async function getResidents(residentsList, residentsState) {
        residentsState.clearPeople();
        for (let i = 0; i < residentsList.length; i++) {
            try {
                const response = await fetch(residentsList[i]);
                const residentData = await response.json();
                updateResidents(residentData, residentsState);
            }
            catch (error) {
                alert('Something went wrong when fetching data!' + error);
            }
        }
}

