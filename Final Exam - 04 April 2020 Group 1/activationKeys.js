function solve(input) {
    let key = input.shift();
    while ((line = input.shift()) !== "Generate") {
        let [command, firstArgument, secondArgument, thirdArgument] = line.split(">>>");
        let isPrinted = true;
        switch (command) {
            case "Contains":
                let str = firstArgument;
                isPrinted = false;
                key.includes(str) ? console.log(`${key} contains ${str}`) : console.log(`Substring not found!`);
                break;
            case "Flip":
                let startIndex = Number(secondArgument);
                let endIndex = Number(thirdArgument);
                if (firstArgument === "Upper") {
                    key = key.slice(0, startIndex) + key.slice(startIndex, endIndex).toUpperCase() + key.slice(endIndex);
                } else {
                    key = key.slice(0, startIndex) + key.slice(startIndex, endIndex).toLowerCase() + key.slice(endIndex);
                }
                break;
            case "Slice":
                let startInd = Number(firstArgument);
                let endInd = Number(secondArgument);
                key = key.slice(0, startInd) + key.slice(endInd);
                break;
        }
        if (isPrinted) {
            console.log(key);
        }
    }
    console.log(`Your activation key is: ${key}`);
}

/* solve([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
  ]); */

  solve([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
  ]);