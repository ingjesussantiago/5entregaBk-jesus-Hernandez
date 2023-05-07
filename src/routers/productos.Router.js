import { Router } from "express"

const router = Router()

router.get("/", (req, res) => {
    res.send("probando router desde 5")
})





export default router