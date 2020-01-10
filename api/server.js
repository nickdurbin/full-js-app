const express = require('express')
const server = express()
const middleware = require('./middleware')
const routes = require('./routes')

server.use(express.json())
server.use(middleware)
server.use(routes)

server.get("/", (req, res) => {
  server.send("<h2>I am your sanity check.</h2>")
})

server.use((req, res, next) => {
  res.status(404).json({ message: "You have taken a wrong turn. Go back and try again!"})
})

server.use((err, req, res, next) => {
  res.status(500).json({ message: "This our fault, not yours."})
})

module.exports = server