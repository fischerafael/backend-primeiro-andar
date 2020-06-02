const express = require('express')
const routes = require('./src/routes')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

mongoose.connect(process.env.DB_CONNECT,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    },
    () => console.log('Connected to Database')
)
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333, () => console.log('Server running on port 3333'))

