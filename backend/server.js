const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const database = require('./SRC/DATABASE/db')
const workoutRouters = require('./SRC/ROUTES/workoutRoutes')

const port = process.env.PORT || 4000
const app = express()



//middleware
app.use(express.json())
app.use((req, res, next) => {
console.log(req.path, req.method)

next()
})
// routes
app.use('/api/v1/workouts', workoutRouters)


//running the app
app.listen(port, () => {
    database()
    console.log(`App is running on port ${port}`)
})


