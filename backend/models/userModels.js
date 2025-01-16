const mongoose = require("mongoose")
const { validate } = require("./foodRecipeModel")

const foodRecipeUserSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: [true, "Invalid data type"]
    },
    email:{
        type: String,
        required: [true, "Invalid data type"],
        unique: [true, "Email already existed"],
        validate:{
            validator: function(email){
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            },
            message: "Invalid email format"
        }
    },
    password: {
        type: String,
        required: [true, "Invalid data type"],
        minLength:[6, "Password length minimum 6"]
    },
    comfirmPassword: {
        type: String,
        validate:{
            validator: function(){
                this.confirmPassword === this.password
            },
            message: "Password didn't match"
        }
    }
}, {timestamps: true})

const foodRecipeUserModel = mongoose.model("foodRecipeUserModel", foodRecipeUserSchema);
module.exports = foodRecipeUserModel;