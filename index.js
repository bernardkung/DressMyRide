const express   = require('express');
const app       = express();
const cities    = require(__dirname + '/public/assets/cities.json')

// Add public directory
app.use(express.static(__dirname + '/public'));
// Enable bodyparsing
app.use(express.urlencoded());
app.set("view engine", "ejs");


// Set routes

app.get('/', (req, res)=>{
    res.render("index.ejs", {location: null, cities: cities})
})

app.post('/', (req, res)=>{
    res.render("index.ejs", {location: req.body.location, cities: cities})
})



app.listen(process.env.PORT, process.env.IP, () => {
    console.log("The server has started!");
})