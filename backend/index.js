const connectToMongo = require('./db');
const express = require('express')

connectToMongo();
const app = express()
const port = 5000

app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.use('/api/profile', require('./routes/profile'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})