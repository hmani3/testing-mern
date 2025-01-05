import express from "express"
import RestaurantCtrl from "./restaurant.controller.js"

const router = express.Router()

router.route("/").get(RestaurantCtrl.apiGetRestaurants)

export default router