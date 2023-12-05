const question = require("./question")
const test = require("./test")
const user = require("./user")
const stat = require("./stat")
const answer = require("./answer")

const mockList = [
    ...test,
    ...question,
    ...user,
    ...stat,
    ...answer,
]

module.exports = mockList