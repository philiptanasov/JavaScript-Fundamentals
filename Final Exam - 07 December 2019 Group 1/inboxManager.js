function solve(input) {
    let inbox = {};

    while ((line = input.shift()) !== "Statistics") {
        let [command, userName, email] = line.split("->");
        switch (command) {
            case "Add":
                if (!inbox[userName]) {
                    inbox[userName] = [];
                } else {
                    console.log(`${userName} is already registered`);
                }
                break;
            case "Send":
                if (inbox[userName]) {
                    inbox[userName].push(email);
                }
                break;
            case "Delete":
                if (inbox[userName]) {
                    delete inbox[userName];
                } else {
                    console.log(`${userName} not found!`);
                }
                break;
        }
    }
    let sortedUsers = Object.keys(inbox).sort((a, b) => inbox[b].length - inbox[a].length || a.localeCompare(b));
    console.log(`Users count: ${sortedUsers.length}`);

    for (const user of sortedUsers) {
        console.log(user);
        inbox[user].forEach(x => console.log(` - ${x}`));
    }
}

/* solve([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Mike->Another random test mail',
    'Statistics'
  ]); */

  solve([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Your loan is overdue',
    'Add->Mike',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Delete->Peter',
    "Send->George->I'm busy",
    'Send->Mike->Another random test mail',
    'Delete->George',
    'Statistics'
  ]);