import express from "express"

const router = express.Router()

router.route("/").get((req,res)=> res.send("nlack"))

export default router