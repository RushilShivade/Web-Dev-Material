const express = require('express');

const app = express();

// console.dir(app);
// app.use(() => {
//     console.log('Got a new request!!');
// })

//Request and Response Modules:
//So when we're using app.use(req, res) , Express automatically creates two objects for us, request and response. Request is basically what's been requested by the server like localhost:3000/dogs. And response will be what we send to whoever requested it. Response has several methods like res.send().

// app.use((req, res) => {
//     console.log('Got a new request!!');

//     // console.dir(req);

//     res.send('<h1> Hello This is a response sent from res.send()</h1>');
// })

//Routing basics. Basically what we're doing is putting up specific output for specific routes like the about us section, the homepage, something else and so on. There are more express methods like app.get() , app.post() etc.


app.get('/aboutUs', (req, res) => {
    res.send('<h1>This is the about us section.</h1>');
})




app.listen(3000, () => {
    console.log('Listening on port 3000');
})

//Will return an object containing all the parameters that were passed in while requesting.
app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
})


//Express path parameters.
app.get('/i/:reels/:reelID', (req, res) => {
    const { reels, reelID } = req.params;
    res.send(`<h2> You are viewing ${reels} with id: ${reelID}`);
})


//Query Strings - Basically when we search, we have certain parameters like localhost:3000/search?q=Rushil. So here q is the query string.

app.get('/search', (req, res) => {
    const {q} = req.query;
    if(!q){
        res.send('Nothing found if nothing searched!');
    }
    res.send(`Query: ${q}`);
})

