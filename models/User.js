import mongoose from "mongoose";

//Defines variables required for Users
const UserSchema = new mongoose.Schema({
    name:{
        //variable type 
        type: String,
        //Required (true/false)
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

//Creates a model
const User = mongoose.model('User', UserSchema);
//Exports - allows other files to import this model 
export default User;