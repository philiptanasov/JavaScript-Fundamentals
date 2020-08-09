function solve(input) {
    let followers = {};

    while ((line = input.shift()) !== "Log out") {
        let [command, userName, firstArgument] = line.split(": ");
        switch (command) {
            case "New follower":
                if (!followers[userName]) {
                    followers[userName] = {
                        likes: 0,
                        comments: 0
                    };
                }
                break;
            case "Like":
                if (!followers[userName]) {
                    followers[userName] = {
                        likes: 0,
                        comments: 0
                    };
                }
                followers[userName].likes += Number(firstArgument);
                break;
            case "Comment":
                if (!followers[userName]) {
                    followers[userName] = {
                        likes: 0,
                        comments: 0
                    };
                }
                followers[userName].comments += 1;
                break;
            case "Blocked":
                if (followers[userName]) {
                    delete followers[userName];
                } else {
                    console.log(`${userName} doesn't exist.`);
                }
                break;
        }
    }
    let sortedFollowers = Object.keys(followers).sort((a, b) => followers[b].likes - followers[a].likes || a.localeCompare(b));
    console.log(`${sortedFollowers.length} followers`);

    for (const follower of sortedFollowers) {
        console.log(`${follower}: ${followers[follower].likes + followers[follower].comments}`);
    }
}

/* solve(['New follower: gosho',
    'Like: gosho: 5',
    'Comment: gosho',
    'New follower: gosho',
    'New follower: tosho',
    'Comment: gosho',
    'Comment: tosho',
    'Comment: pesho',
    'Log out']); */

solve(['Like: A: 3',
    'Comment: A',
    'New follower: B',
    'Blocked: A',
    'Comment: B',
    'Like: C: 5',
    'Like: D: 5',
    'Log out']);