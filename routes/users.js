import express from "express"

const router = express.Router()

const users = [
  {
    Name: "Kyrie Irving",
    Team: "Brooklyn Nets",
    Points: 33
  },
  {
    Name: "Damien Lillard",
    Team: "Portland",
    Points: 38
  }
]

// all routes starts with /users
router.get("/", (req, res) => {
  res.send(users)
})

router.post("/", (req, res) => {
  // console.log(req.body)
  const user = req.body
  users.push(user)
  res.send(`User with the name ${user.Name} added to the database`)
})

export default router
