function solve(input) {
    let numberOfLines = Number(input.shift());

    for (let i = 0; i < numberOfLines; i++) {
        let password = input.shift();
        let pattern = /^(.+)>(?<first>\d{3})\|(?<second>[a-z]{3})\|(?<third>[A-Z]{3})\|(?<fourth>[^<>]{3})<\1$/;

        if ((match = password.match(pattern))) {
            let firstGroup = match.groups.first;
            let secondGroup = match.groups.second;
            let thirdGroup = match.groups.third;
            let fourthGroup = match.groups.fourth;
            let encryptedPassword = firstGroup + secondGroup + thirdGroup + fourthGroup;
            console.log(`Password: ${encryptedPassword}`);
        } else {
            console.log(`Try another password!`);
        }
    }
}

/* solve([
    '3',
    '##>00|no|NO|!!!?<###',
    '##>123|yes|YES|!!!<##',
    '$$<111|noo|NOPE|<<>$$'
  ]); */

  solve([
    '5',
    'aa>111|mqu|BAU|mqu<aa',
    '()>111!aaa!AAA!^&*<()',
    'o>088|abc|AAA|***<o',
    'asd>asd|asd|ASD|asd<asd',
    '*>088|zzzz|ZzZ|123<*'
  ]);