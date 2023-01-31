const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000
// Require EJS layouts
const expressLayouts = require("express-ejs-layouts");


//connects to a public folder
app.use(express.static("public"))

// creates an absolute path pointing to a folder called "views"
app.set("views", __dirname + "/views");

// set-up EJS
app.set("view engine", "ejs");

// EJS layouts 
app.use(expressLayouts)

//request and response
//creating routes 
app.get('/', (req, res) => {
    console.log(req.url)
//   res.sendFile(__dirname + '/views/index.html')
// send views/index.ejs for displaying in the browser
 res.render("index")});


//creating routes, the name after the slash has nothing to do with the route can be different names
app.get('/contact', (req, res) => {
    console.log(req.url)
    // res.sendFile(__dirname + '/views/contact.html')
    // send views/index.ejs for displaying in the browser
res.render("contact")});



//creating routes, the name after the slash has nothing to do with the route can be different names
app.get('/about', (req, res) => {
    console.log(req.url)
    // res.sendFile(__dirname + '/views/about.html')
        // send views/index.ejs for displaying in the browser
res.render("about")});
 

//creating routes, the name after the slash has nothing to do with the route can be different names
  app.get('/photogallery', (req, res) => {
    console.log(req.url)
    // res.sendFile(__dirname + '/views/photogallery.html')
        // send views/index.ejs for displaying in the browser
res.render("photogallery")});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})