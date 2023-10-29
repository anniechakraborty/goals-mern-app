// entry point to the server
const express = require('express')
// using "require" to import needed modules is the CommonJS syntax whereas using "import {} from './.. path' " is the ES6 syntax
const dotenv = require('dotenv').config() // this allows us to have a .env file with our variables in it
const colors = require('colors')
const port = process.env.PORT || 8000
const { customErrorHandler } = require('../backend/middlewares/errorMiddlewares')
const { connectDB } = require('../backend/config/db')

connectDB()

const app = express()

// app.get('/api/goals', (req, res)=>{
//     // NOTES ===========================================================
//     // res.send("Howdy!"); // Sends the output response to the API call. The content-type of the response is "text/html; charset=utf-8"
//     // res.json({message : "Howdy!"}); // The content-type of this response is "application/json; charset=utf-8"
//     // In both the above cases, we get a default response status of 200 but we can also send our own status like this
//     res.status(200).json({message : "Howdy!"});
//     // =================================================================
// })


// we need to add some middleware lines to access the data passed in the body of the api call
app.use(express.json()); // for raw json data as body (the raw option in postman)
app.use(express.urlencoded({extended : false})); // for form url encoded data

app.use('/api/goals', require('./routes/goalRoutes'))
// this redirects to our routes page when endpoint /api/goals is hit

app.use(customErrorHandler)
// this will override the default error handler of express

app.listen(port, ()=> {
    console.log(`server started on port ${port}...`);
})
