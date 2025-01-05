const express = require("express")
const {registerController, getUserData, loginController, logoutController} = require("../handlers/user")

const UserRouter = express.Router()

UserRouter.post("/register", registerController)
UserRouter.get("/:userId", getUserData)
UserRouter.post("/login", loginController)
UserRouter.post("/logout", logoutController)

module.exports = UserRouter