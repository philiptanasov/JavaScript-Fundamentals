function solve(input) {
    let cities = {};
    while ((line = input.shift()) !== "Sail") {
        let [name, population, gold] = line.split("||");
        if (!cities[name]) {
            cities[name] = {
                population: 0,
                gold: 0
            };
        }
        cities[name].population += Number(population);
        cities[name].gold += Number(gold);
    }

    while ((line = input.shift()) !== "End") {
        let [command, city, firstArgument, secondArgument] = line.split("=>");
        switch (command) {
            case "Plunder":
                if (cities[city]) {
                    let people = Number(firstArgument);
                    let gold = Number(secondArgument);
                    cities[city].population -= people;
                    cities[city].gold -= gold;
                    console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);

                    if (cities[city].population <= 0 || cities[city].gold <= 0) {
                        delete cities[city];
                        console.log(`${city} has been wiped off the map!`);
                    }
                }
                break;
            case "Prosper":
                let amountOfGold = Number(firstArgument);
                if (amountOfGold > 0) {
                    cities[city].gold += amountOfGold;
                    console.log(`${amountOfGold} gold added to the city treasury. ${city} now has ${cities[city].gold} gold.`);
                } else {
                    console.log(`Gold added cannot be a negative number!`);
                }
                break;
        }

    }
    let sortedCities = Object.keys(cities).sort((a, b) => cities[b].gold - cities[a].gold || a.localeCompare(b));

    if (sortedCities.length > 0) {
        console.log(`Ahoy, Captain! There are ${sortedCities.length} wealthy settlements to go to:`);
        for (const city of sortedCities) {
            console.log(`${city} -> Population: ${cities[city].population} citizens, Gold: ${cities[city].gold} kg`);
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}

/* solve(
    [
        'Tortuga||345000||1250',
        'Santo Domingo||240000||630',
        'Havana||410000||1100',
        'Sail',
        'Plunder=>Tortuga=>75000=>380',
        'Prosper=>Santo Domingo=>180',
        'End']); */

solve(
    [
        'Nassau||95000||1000',
        'San Juan||930000||1250',
        'Campeche||270000||690',
        'Port Royal||320000||1000',
        'Port Royal||100000||2000',
        'Sail',
        'Prosper=>Port Royal=>-200',
        'Plunder=>Nassau=>94000=>750',
        'Plunder=>Nassau=>1000=>150',
        'Plunder=>Campeche=>150000=>690',
        'End'
      ]
      
);