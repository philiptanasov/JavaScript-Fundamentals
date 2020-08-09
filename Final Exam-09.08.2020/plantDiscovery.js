function solve(input) {
    let n = Number(input.shift());
    let plants = {};
    for (let i = 0; i < n; i++) {
        let line = input.shift();
        let [plantName, rarity] = line.split("<->");
        if (!plants[plantName]) {
            plants[plantName] = {
                rarity: 0,
                rating: [],
                avgRating: 0
            };
        }
        plants[plantName].rarity = Number(rarity);
    }

    while ((line = input.shift()) !== "Exhibition") {
        let [command, instruction] = line.split(": ");
        let [plant, firstArgument] = instruction.split(" - ");
        switch (command) {
            case "Rate":
                let rating = Number(firstArgument);
                if (plants[plant] && Number.isInteger(rating)) {
                    plants[plant].rating.push(rating);
                } else {
                    console.log(`error`);
                }
                break;
            case "Update":
                let newRarity = Number(firstArgument);
                if (plants[plant] && Number.isInteger(newRarity)) {
                    plants[plant].rarity = newRarity;
                } else {
                    console.log(`error`);
                }
                break;
            case "Reset":
                if (plants[plant]) {
                    plants[plant].rating.length = 0;
                } else {
                    console.log(`error`);
                }
                break;
        }
    }
    for (const key in plants) {
        let sum = 0;
        let len = plants[key].rating.length;
        plants[key].rating.forEach(x => sum += x);
        if (sum > 0 && len > 0) {
            plants[key].avgRating = sum / len;
        }
    }
    let sortedPlants = Object.keys(plants).sort((a, b) => plants[b].rarity - plants[a].rarity || plants[b].avgRating - plants[a].avgRating);
    if (sortedPlants.length > 0) {
        console.log(`Plants for the exhibition:`);
    }
    for (const plant of sortedPlants) {
        let rarity = plants[plant].rarity;
        let avgRating = plants[plant].avgRating.toFixed(2);
        console.log(`- ${plant}; Rarity: ${rarity}; Rating: ${avgRating}`);
    }
}

solve(['3',
        'Arnoldii<->4',
        'Woodii<->7',
        'Welwitschia<->2',
        'Rate: Woodii - 10',
        'Rate: Welwitschia - 7',
        'Rate: Arnoldii - 3',
        'Rate: Woodii - 5',
        'Update: Woodii - 5',
        'Reset: Arnoldii',
        'Exhibition']);