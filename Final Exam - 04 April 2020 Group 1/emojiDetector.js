function solve(input) {
    let text = input.shift();
    let threshold = 1;
    let count = 0;
    let coolEmojis = [];
    let pattern = /([:]{2}|[*]{2})(?<emoji>([A-Z][a-z]{2,}))\1/g;
    let digitPattern = /\d/g;
    while ((match = digitPattern.exec(text))) {
        threshold *= Number(match[0]);
    }
    while ((match = pattern.exec(text))) {
        count++;
        let emoji = match.groups.emoji;
        let charCodeSum = 0;
        emoji.split("").forEach(x => charCodeSum += x.charCodeAt(0));

        if (charCodeSum >= threshold) {
            coolEmojis.push(match[0]);
        }

    }
    console.log(`Cool threshold: ${threshold}`);
    console.log(`${count} emojis found in the text. The cool ones are:`);
    console.log(coolEmojis.join("\n"));
}

/* solve([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
  ]);
 */
/* solve([
    '5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::'
  ]);
 */
  solve([
    "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
  ]);