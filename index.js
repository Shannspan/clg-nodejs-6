// start building your own server by: 
//by calling express and body-parser libararies
// make sure they are installed as dependencies in package.json
// if not add via terminal eg npm i express

const express = require("express");

// create app variable which calls express function
// to start a new express application

const app = (express());

const bodyParser = require("body-parser");



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
    // health check ok res.json(`This is the home page`);
})

// code for creating Postman collection

const books = [
    {"ID": 1, "Title": "My Invented Country", "Author": "Isabel Allende", "Style": "Personal Memoir"},
    {"ID": 2,"Title": "The Almond Picker", "Author": "Simonetta Angello Hornby", "Style": "Historical Italian Romance"},
    {"ID": 3,"Title": "The Girl from the Sea", "Author": "James Aldridge", "Style": "France in the 1950's"},
    {"ID": 4,"Title": "The Cat's Table", "Author": "Michael Ondaatje", "Style": "Childhood Adventure"}
];


app.get('/novels/get', (req, res) => {
   return res.send(books);
});

// adding a new book using post


app.post('/novels/post', (req, res) => {
    console.log(req.body);
    return res.send(`Novel has been added: ${req.body.Title}`);
}) 

// NOTE: when using Postman pay VERY careful attention to:
// * Header contents (duplicate header key value pairs must be deleted not just unticked)
// * Body being set to JSON

// deleting a title 

  app.delete('/novels/delete/:id', (req, res) => {
    console.log(req.body);
    res.send(`DELETE requested ID: ${req.body.ID}`)
  })

// now app needs to listen to a port
// always include console.log for 'health' check

app.listen(3000, () => console.log('Server started'));