const express = require('express');
const path = require('path');
const app = express();
const redditData = require('./data.json');
// console.log(redditData);

app.use(express.static(path.join(__dirname,'public')))

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    
    if(data){
        res.render('subreddit', {...data});
    }
    else{
        res.render('notFound' , {subreddit});
    }
})


app.set('view engine' , 'ejs');

// app.use((req, res) => {
//     console.log('Got a new request!');
//     // console.dir(req);
// })


//So by default, the directory of the views is assumed to be the current directory of the cmd. So if u want to run dynamic html, you'll have to be in the directory where index.js and views folder are located. If u want the otherwise, you'll have to define the path of views before hand. For that, a node module 'path' is required that has this method called path.join. Basically joins the path of first parameter and the second thing that we want to join. See video.

app.set('views' , path.join(__dirname , '/views'));


//If you want to pass in data from js file in to ejs file, what u can do is pass the variable in js file as one of the parameters in res.render('random' , {numToBePassed : num}). This will pass in numToBePassed in the ejs file so u can reference it whenever u want. If you want the name to be the name in the js file, simply write num in the key value pair, it assumes that the key and the value are the same.

const num = Math.floor(Math.random() * 20)+1;

app.get('/', (req, res) => {
    res.render('home.ejs' , {num});
})

app.get('/r/:reel' , (req, res) =>{
    const {reel} = req.params;

    res.render('reel.ejs' , {reel});
})

app.listen(3000 , () => {
    console.log('listening on port 3000');
})


app.get('/dogs', (req, res) =>{
    const dogs = [
        'Golden Retriever' , 'German Shephard' , 'Pug' , 'Doberman' , 'Rottweiler' , 'Husky'
    ]

    res.render('dogs' , {dogs});
})

