const mongoose = require("mongoose")
const userSampleSchema = new mongoose.Schema({
    userName:{
        type:String,
        required: [true, "Mention username"],
        maxLength: [30, "Username length should exceeded 30 characters"],
    },
    email:{
        type: String,
        required: [true, "Mention your email address"],
        unique: [true, "Email address already existed"]
    },
    phoneNumber:{
        type:Number,
        required: [true, "Mention your phone number"]
    },
    password:{
        type: String,
        required: [true, "Mention your password"],
        minLength: [5, "Create your password with minimum length 5 characters"]
    },
    comparePassword:{
        type:String,
        required:[true, "Mention your compare password"],
        validate:{
            validator:() =>{
                this.password == this.comparePassword
            },
            message: "Password and compare password was didn't match"
        }
    }
})

const userSampleModel = mongoose.model("userModel", userSampleSchema)

module.exports =  userSampleModel