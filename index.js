// start building your own server by: 
//by calling express and body-parser libararies
// make sure they are installed as dependencies in package.json
// if not add vis terminal eg npm i express

const express = require('express');
const bodyParser = require('body-parser');

// create app variable which calls express function
// to start a new express application

const app = express();

//app variable will now use the body-parser.json to parse the json request body
//to turn it in to a js string

app.use(bodyParser.json());

//then assignes it to the request.body object below

//this is also middleware that constructs the api
// .get is the http method for which the middleware applies
// '/' is the path or route for which the middleware applies
// req is request argument to middleware function
// res is response argument to middleware function
// middleware is returning response in json format
// sending though req.body as an argument

// run express framework containing API endpoint
// home page
app.get('/', (req, res) => {
    res.json(req.body);
})

// code for creating Postman collection

const books = [
    {"ID": 1, "Title": "My Invented Country", "Author": "Isabel Allende", "Style": "Personal Memoir"},
    {"ID": 2,"Title": "The Almond Picker", "Author": "Simonetta Angello Hornby", "Style": "Historical Italian Romance"},
    {"ID": 3,"Title": "The Girl from the Sea", "Author": "James Aldridge", "Style": "France in the 1950's"},
    {"ID": 4,"Title": "The Cat's Table", "Author": "Michael Ondaatje", "Style": "Childhood Adventure"}
];

app.get('/novels', (req, res) => {
    res.json(books);
});

// adding a new book using post

app.post('/novels', (req, res) => {
    let newBook = req.body.user;
    return res.send(`Novel has been added: ${newBook}`);
})

// deleting a title

app.delete('/novels', (req, res) => {
    let delNovel = req.body.ID;
    return res.send(`Novel ID: 2 has been deleted: ${delNovel}`);
})

// now app needs to listen to a port
// always include console.log for 'health' check

app.listen(3000, () => console.log('Server started'));