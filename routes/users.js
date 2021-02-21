import express from "express"

const router = express.Router()

// all routes starts with /users
router.get("/", (req, res) => {
  res.send("Sha mai?")
})

export default router
