let restaurants

export default class RestaurantDAO {
    static async injectDB(conn){
        if (restaurants){
            return
        }
        try {
            restaurants = await conn.db(process.env.NS).collection("restaurants")
        } catch (e) {
            console.error(`Unable to establish collection in restaurantDAO: ${e}`)
        }
    }
}