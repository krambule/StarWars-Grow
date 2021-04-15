export default function updatePlanets(planetsJson, planetsState){
    const planetsResults = planetsJson.results;
    for(let i =0; i < planetsResults.length; i++){
        planetsState.addPlanet(planetsResults[i].name, planetsResults[i].residents);
    }
}
