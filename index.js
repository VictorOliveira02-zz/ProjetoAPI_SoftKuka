const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require("axios")


const app = express()


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => { // ROTA 1
    axios.get('https://swapi.dev/api/people/1').then(response => {
        return res.json(response.data);
    }).catch(error => {console.log(error)})
});

app.get('/planets', (req, res) => { // ROTA 2
    axios.get('https://swapi.dev/api/planets/3/').then(response => {
        return res.json(response.data);
    }).catch(error => {console.log(error)})
});

app.get('/starships', (req, res) => { // ROTA 3
    axios.get('https://swapi.dev/api/planets/3/').then(response => {
        return res.json(response.data);
    }).catch(error => {console.log(error)})
});


app.listen(3000, () => {
    console.log(`Express started at http://localhost:3000`);
});