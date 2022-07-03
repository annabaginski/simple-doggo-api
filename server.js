const express = require('express');
const app = express();

const PORT = 8000;

//CREATE API HERE
let doggos = {
    'corgi': {
        'breeds': 'Pembroke and Cardigan Welsh',
        'lifespan': '12-15 years',
        'temperament': 'Outgoing, tenacious, friendly, protective'
    },

    'labrador': {
        'breeds': 'Black and Brown',
        'lifespan': '14 years',
        'temperament': 'energetic'
    }
};

//get request for home page, sends index html
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

//get request for api page
app.get('/api', (request, response) => {
    response.json(doggos)    
})

app.get('/api/:breed', (request, response) => {
    const breedName = request.params.breed;
    if (doggos[breedName]){
        response.json(doggos[breedName]);
    } else {
        console.log('This dog does not exist in the directory!');
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Server running!');
})