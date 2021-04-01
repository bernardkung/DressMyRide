const express   = require('express');
const app       = express();
const cities    = require(__dirname + '/public/assets/cities.json')

// Add public directory
app.use(express.static(__dirname + '/public'));
// Enable bodyparsing
app.use(express.urlencoded());
app.set("view engine", "ejs");


// Set routes
app.get("/", (req, res)=>{
    res.render("index.ejs");
});

app.get('/template', (req, res)=>{
    res.render("template.ejs")
})




app.get('/location', (req, res)=>{
    res.render("location.ejs", {location: null, cities: cities})
})

app.post('/location/', (req, res)=>{
    res.render("location.ejs", {location: req.body.location, cities: cities})
})

app.listen(process.env.PORT, process.env.IP, () => {
    console.log("The server has started!");
})