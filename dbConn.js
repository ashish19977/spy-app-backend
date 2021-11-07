const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://ashish:ashish@cluster0.zlvgs.mongodb.net/taskapp?retryWrites=true&w=majority", () => { 
    console.log("connect to db")
})