function solve(input) {
    let numberOfLines = Number(input.shift());
    let count = 0;

    for (let i = 0; i < numberOfLines; i++) {
        let text = input.shift();
        let pattern = /(U\$)(?<userName>[A-Z][a-z]{2,})\1(P@\$)(?<password>[A-Za-z]{5,}\d+)\3/;
        if ((match = text.match(pattern))) {
            count++;
            let userName = match.groups.userName;
            let password = match.groups.password;
            console.log(`Registration was successful`);
            console.log(`Username: ${userName}, Password: ${password}`);
        } else {
            console.log(`Invalid username or password`);
        }
    }
    console.log(`Successful registrations: ${count}`);
}

/* solve([
        '3',
        'U$MichaelU$P@$asdqwe123P@$',
        'U$NameU$P@$PasswordP@$',
        'U$UserU$P@$ad2P@$'
      ]); */

solve([ '2', 'U$TommyU$P@$asdqwe123P@$', 'Sara 1232412' ]);