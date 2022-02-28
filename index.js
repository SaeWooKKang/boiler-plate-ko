const express = require('express')
const app = express()
const port = 6000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://pac:qwerqwer132!@boilerplate.kpycv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // userCreateIndex: true,
  //  useFindAndModify: false
}).then(() => console.log('MongoDb Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello world!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


