const express = require('express')
const app = express()

app.use(logger)

app.get('/', (req,res) => {
    res.send('Home Page')
    console.log('Home')
})

app.get('/users', auth, (req,res) => {
    console.log(`user is admin = ${req.admin}`)
    res.send('Users Page')
    console.log('Users')
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    console.log('before')
    next()
    console.log('after')
}
 
function auth(req, res, next) {
    if(req.query.admin === 'true'){
        req.admin = true
        next()
        return
    }
    res.send('No Auth')
    
}

app.listen(3000)