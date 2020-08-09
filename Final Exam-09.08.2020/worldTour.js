function solve(input) {
    let text = input.shift();

    while ((line = input.shift()) !== "Travel") {
        let [command, firstArgument, secondArgument] = line.split(":");
        switch (command) {
            case "Add Stop":
                let index = Number(firstArgument);
                let str = secondArgument;
                if (text[index]) {
                    text = text.slice(0, index) + str + text.slice(index);
                }
                break;
            case "Remove Stop":
                let startIndex = Number(firstArgument);
                let endIndex = Number(secondArgument);
                if (text[startIndex] && text[endIndex]) {
                    text = text.slice(0, startIndex) + text.slice(endIndex + 1);
                }
                break;
            case "Switch":
                let oldStr = firstArgument;
                let newStr = secondArgument;
                let regEx = new RegExp(oldStr, 'g');
                if (text.includes(oldStr)) {
                    text = text.replace(regEx, newStr);
                }
                break;
        }
        console.log(text);
    }
    console.log(`Ready for world tour! Planned stops: ${text}`);
}

solve(
    [
        'Hawai::Cyprys-Greece',
        'Add Stop:7:Rome',
        'Remove Stop:11:16',
        'Switch:Hawai:Bulgaria',
        'Travel'
    ]
);