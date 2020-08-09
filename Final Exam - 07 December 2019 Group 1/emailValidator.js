function solve(input) {
    let email = input.shift();

    while ((line = input.shift()) !== "Complete") {
        let isPrinted = true;
        let [command, firstArgument] = line.split(" ");
        switch (command) {
            case "Make":
                firstArgument === "Upper" ? email = email.toUpperCase() : email = email.toLowerCase();
                break;
            case "GetDomain":
                let count = Number(firstArgument);
                console.log(email.slice(email.length - count));
                isPrinted = false;
                break;
            case "GetUsername":
                isPrinted = false;
                if (email.includes("@")) {
                    console.log(email.substring(0, email.indexOf("@")));
                } else {
                    console.log(`The email ${email} doesn't contain the @ symbol.`);
                }
                break;
            case "Replace":
                let char = firstArgument;
                while (email.includes(char)) {
                    email = email.replace(char, "-");
                }
                break;
            case "Encrypt":
                email = email.split("").map(x => x.charCodeAt(0)).join(" ");
                break;
        }
        if (isPrinted) {
            console.log(email);
        }
    }
}

solve([
    'Mike123@somemail.com',
    'Make Upper',
    'GetDomain 3',
    'GetUsername',
    'Encrypt',
    'Complete']);

/* solve([
    'AnotherMail.com',
    'Make Lower',
    'GetUsername',
    'Replace a',
    'Complete',
    '']); */