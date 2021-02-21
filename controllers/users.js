import { v4 as uuidv4 } from "uuid"

let users = []

export const createUser = (req, res) => {
  const user = req.body
  users.push({ ...user, id: uuidv4() })
  res.send(`User with the name ${Name} added to the database`)
}

export const getUsers = (req, res) => {
  res.send(users)
}

export const getUser = (req, res) => {
  const { id } = req.params

  const foundUser = users.find(user => user.id === id)
  res.send(foundUser)
}

export const deleteUser = (req, res) => {
  const { id } = req.params
  users = users.filter(user => user.id !== id)

  res.send(`User with the id ${id} deleted from the database`)
}

export const updateUser = (req, res) => {
  const { id } = req.params
  const { Name, Team, Points } = req.body
  const user = users.find(user => user.id === id)
  if (Name) user.Name = Name
  if (Team) user.Team = Team
  if (Points) user.Points = Points

  res.send(`User with ${Name} has been updated`)
}
