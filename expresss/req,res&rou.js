const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('hell ooo ')
})
//`app.post` in Express is used to handle HTTP POST requests.
app.post('/', (req, res) => {
    console.log('this is post is post request')
    res.send('Hello world post')

})
//`app.put()` in Express is used to handle HTTP PUT requests for updating existing resources.
app.put('/', (req, res) => {
    console.log('this is post is put request')
    res.send('Hello world put')

})
//his is how to serve a proper htmlpage
app.get('/htmlpage', (req, res) => {
    res.sendFile('templates/htmlpage.html', { root: __dirname })
})
app.listen(port, () => {
    console.log(`welcome to port ${port}`)
})