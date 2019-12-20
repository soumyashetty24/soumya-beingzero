const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))
//res.sendFile
//res.JSON
app.use(express.static('frontend'))
app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/html/home.html'))

//app.get('/login', (req, res) => res.send('Login'))
//app.get('/Register', (req, res) => res.send('Register'))
var student={"name":"being zero","college":"vnr","roll":"1234"}
app.get('/data',(req,res)=> res.json(student))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))