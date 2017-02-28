const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.set('views', `${__dirname}/src`)

app.get('/', (req, res) => res.render('index'))
app.use(express.static(__dirname))

app.listen(3000, () => console.log('Listening on 3000'))
