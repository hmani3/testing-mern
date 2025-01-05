import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import RestaurantDAO from "./dao/restaurantDAO.js"
dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.DB_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
    }
)
.then(async client => {
    await RestaurantDAO.injectDB(client)
    
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
})
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})