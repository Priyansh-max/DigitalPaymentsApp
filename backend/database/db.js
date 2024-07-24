const connection = require("../config")
const mongoose = require("mongoose");


//this is a promise syntax .then will wait for the promise to resolve then the code goes forwardd
mongoose.connect(connection)
.then(() => console.log("MongoDb connectedd"))
.catch(err => console.error("MongoDb connection error", err));


const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
        minLenght : 6,
        maxLength : 10,
    },
    password : {
        type : String,
        required : true,
        minLength : 6
    },
    firstname : {
        type : String,
        required : true,
        trim : true,
        maxLength : 20
    },
    lastname : {
        type : String,
        required : true,
        trim : true,
        maxLength : 20
    }
})

const User = mongoose.model("User", userSchema);

//also learnt ke balance hamesha num form me he store hota hai kyuki and fir usme 2/4 ka kuch precision wala seen hota haii real world me
//tho balance ko float form me store nai krnaa
const BankSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId, //referencing by id
        ref : 'User',
        required : true  
    },
    balance : {
        type : Number,
        required : true
    }
})

const Account = mongoose.model("Account" , BankSchema);

module.exports({
    User,
    Account
})