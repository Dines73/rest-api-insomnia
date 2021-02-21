import express from "express"
import { createUser, getUsers, getUser, deleteUser, updateUser } from "../controllers/users.js"

const router = express.Router()
// const users = [
//   {
//     Name: "Kyrie Irving",
//     Team: "Brooklyn Nets",
//     Points: 33
//   },
//   {
//     Name: "Damien Lillard",
//     Team: "Portland",
//     Points: 38
//   }
// ]
// let users = []
// all routes starts with /users

router.get("/", getUsers)
router.post("/", createUser)
router.get("/:id", getUser)
router.delete("/:id", deleteUser)
router.patch("/:id", updateUser)

export default router
