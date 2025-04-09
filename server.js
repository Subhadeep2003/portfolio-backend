const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

//dotenv configuration
dotenv.config()

//rest object
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
//routes 
app.use('/api/v1/portfolio',require("./routes/portfolioroute"))

//port 
const port = process.env.PORT || 8000

//listen
app.listen(port,() => {
    console.log(`server is running on port ${port}`)
})
//Basic server setup
