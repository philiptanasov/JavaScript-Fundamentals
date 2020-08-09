function solve(input) {
    let pattern = /(\/|=)(?<location>[A-Z][A-Za-z]{2,})\1/g;
    let destination = [];
    let points = 0;
    while ((match = pattern.exec(input))) {
        destination.push(match.groups.location);
        points += match.groups.location.length;
    }
    console.log(`Destinations: ${destination.join(", ")}`);
    console.log(`Travel Points: ${points}`);
}

solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");

solve("ThisIs some InvalidInput");