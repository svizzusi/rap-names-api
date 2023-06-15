const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    'savage': {
        'age' : 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London'
    },
    'chance the rapper': {
        'age' : 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago'
    },
    'dylan': {
        'age' : 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response)=>{
    const rappersName = request.params.rapperName.toLowerCase();
    if(rappers[rappersName])
    response.json(rappers[rappersName])
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log('server running better catch it')
}) 