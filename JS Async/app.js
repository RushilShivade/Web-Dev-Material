const login = async (username, password) => {
    if (!username || !password) throw "Missing credentials!";
    if (password === 'Rushil02*') return 'Successfully logged in!';
    throw 'Invalid username or password';
}

login()
    .then(msg => {
        console.log("LOGGED IN!");
        console.log(msg);
    })
    .catch(err => {
        console.log("ERROR: ");
        console.log(err);
    })
