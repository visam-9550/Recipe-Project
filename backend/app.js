const express = require("express");
const app = express();
const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose");
const {PASSWORD, PORT} = process.env
const DB_URL = `mongodb+srv://venkatasai:${PASSWORD}@cluster0.as3no.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const UserRouter = require("./routes/userRoutes")
const RecipeRouter = require("./routes/foodRecipeRoutes")
const FavouriteRecipesRouter = require("./routes/favouriteRecipesRoutes")
const cors = require("cors")


app.use(express.json())
app.use(cors())

// ROUTES //

app.use("/user", UserRouter)
app.use("/", RecipeRouter)
app.use("/api", FavouriteRecipesRouter)

app.listen(PORT, ()=> {
    console.log(`Server connection successfully ${PORT}`);
    mongoose.connect(DB_URL).then(()=>{
        console.log("Mongoose connected successfully")
    }).catch((err) => {
        console.log(err.message)
    })
})




