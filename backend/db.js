const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://khushalsharma1902:Khushal%408025@cluster0.cy0lg4f.mongodb.net/paytm")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: String,
    firstname: String,
    lastname: String
})

const acountSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    balance:{
        type: Number,
        required: true
    }
})

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', acountSchema);
module.exports = {
    User,
    Account
}