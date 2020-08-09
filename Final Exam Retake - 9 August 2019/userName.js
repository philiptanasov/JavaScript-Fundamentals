function solve(input) {
    let userName = input.shift();

    while ((line = input.shift()) !== "Sign up") {
        let [command, firstArgument, secondArgument] = line.split(" ");
        let isPrinted = true;
        switch (command) {
            case "Case":
                firstArgument === "lower" ? userName = userName.toLowerCase() : userName = userName.toUpperCase();
                break;
            case "Reverse":
                isPrinted = false;
                let startIndex = Number(firstArgument);
                let endIndex = Number(secondArgument);
                if (userName[startIndex] && userName[endIndex]) {
                    let reversed = userName.slice(startIndex, endIndex + 1).split("").reverse().join("");
                    console.log(reversed);
                }
                break;
            case "Cut":
                let substr = firstArgument;
                if (userName.includes(substr)) {
                    userName = userName.replace(substr, "");
                } else {
                    isPrinted = false;
                    console.log(`The word ${userName} doesn't contain ${substr}.`);
                }
                break;
            case "Replace":
                let char = firstArgument;
                while (userName.includes(char)) {
                    userName = userName.replace(char, "*");
                }
                break;
            case "Check":
                isPrinted = false;
                let symbol = firstArgument;
                if (userName.includes(symbol)) {
                    console.log(`Valid`);
                } else {
                    console.log(`Your username must contain ${symbol}.`);
                }
                break;
        }
        if (isPrinted) {
            console.log(userName);
        }
    }
}

//solve([ 'Pesho', 'Case lower', 'Cut ES', 'Check @', 'Sign up' ]);

solve([ 'ThisIsMyString', 'Reverse 1 4', 'Replace i', 'Cut My', 'Sign up' ]);