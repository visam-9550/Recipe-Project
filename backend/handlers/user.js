const userSampleModel = require("../models/userModels")
const jwt = require("jsonwebtoken")
const {SECRET_KEY} = process.env



const registerController = async(req, res) =>{
    try{
        const bodyDetails = req.body
        const emailValidation = bodyDetails.email.endsWith("@gmail.com")
        if(emailValidation){
            const newUser = await userSampleModel.create(bodyDetails)
            res.status(200).json({
                status: "Registration Success",
                newUser
            })
        }else{
            res.status(400).json({
                status: "Registration failure",
                message: "mention proper email address"
            })
        }
        

    }catch(err){
        res.status(400).json({
            status: "Failure",
            message: err.message
        })
    }
}

const loginController = async(req, res) => {
    try{
        const {email, password} = req.body
        const userData = await userSampleModel.findOne({email})
        console.log(userData)
        if(userData != null){
            if(userData.password == password){
                const token = jwt.sign({data: userData}, SECRET_KEY)
                res.cookie("JWT", token, {httpOnly: true, maxAge: 1000000, path: "/"})
                res.cookie("userDetails", userData, {httpOnly: true, maxAge: 1000000, path: "/"})
                res.status(200).json({
                    status: "Success",
                    message: {userData: userData, token}
                })
            }else{
                res.status(500).json({
                    status: "Failure",
                    message: "Invalid password"
                })
            }
        }else{
            res.status(500).json({
                status: "Failure",
                message: "Invalid email"
            })
        }
    }catch(err){
        res.status(500).json({
            status: "failure",
            message: err.message
        })
    }
}

const logoutController = async(req, res) =>{
    try{
        res.clearCookie("JWT", {path: "/"})
        res.clearCookie("userDetails", {path: "/"})
        res.status(200).json({
            status: "Success",
            message: "Successfully logout"
        })

    }catch(err){
        res.status(500).json({
            status: "Failure",
            message: err.message
        })
    }
}

const getUserData = async(req, res) =>{
    try{
        const {userId} = req.params
        const userDetails = await userSampleModel.findById(userId)
            res.status(200).json({
                status: "Success",
                message: {username: userDetails.userName, email: userDetails.email}
            })
    }catch(err){
        res.status(500).json({
            status: "Failure",
            message: "Invalid user id"
        })
    }
    

}



module.exports = {registerController, getUserData, loginController, logoutController}