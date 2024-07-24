import { User , Account } from '../database/db'
import { secret } from '../config'
import { authMiddleware } from '../middleware/authmiddleware'
const zod = require('zod');
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router;
const app = express();

app.use(express.json()); //body parser middleware

const signupbody = zod.object({
    username : zod.string().email(),
    password : zod.string().min(6),
    firstname : zod.string(),
    lastname : zod.string()
})

const signinbody = zod.object({
    username : zod.string().email(),
    password : zod.string(),
})

const updatebody = zod.object({
    password : zod.string().min(6).optional(), //this makes sure that if the password is not send in the request body it still works
    firstname : zod.string().optional(),//same for this
    lastname : zod.string().optional() //same for this
})

router.post('/signup' ,async (req , res) => {
    const username = req.body.username;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;

    const success = signupbody.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            message : "Email already taken / incorrect inputs / wrong email"
        })
    }

    const user_exist = await User.findOne({
        username : req.body.username
    })

    if(user_exist){
        return res.status(411).json({
            message : "User already exist with the email address"
        })
    }

    const user = await User.create({
        username : username,
        password : password,
        firstname : firstname,
        lastname : lastname
    })

    const Userid = user._id;

    await Account.create({
        UserId : Userid,
        balance : 1 + Math.random() * 10000
    })

    const token = jwt.sign({Userid} , secret);

    res.json({
        message : "Profile create successfully",
        token : token
    })
})

router.post('/signin' , async (req , res) => {
    const username = req.body.username;
    const password = req.body.password;

    const success = signinbody.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            message : "Incorrect inputss"
        })
    }

    const userexist = await User.findOne({
        username : username,
        password : password,
    })

    if(userexist){
        const token = jwt.sign({Userid : userexist._id} , secret);

        res.json({
            token : token
        })

        return;
    }

    res.status(411).json({
        message : "error while logging in"
    })

})

router.put('/update' , authMiddleware , async (req , res) => {
    const success_vali = updatebody.safeParse(req.body);

    if(!success_vali){
        return res.status(411).json({
            message : "Incorrect creds passedd"
        })
    }

    await User.updateOne({_id : req.userId} , req.body);

    res.json({
        message : "Updated successfullyy"
    })
})

//to find friendss
router.get("/bulk" ,async (req , res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or : [{
            firstname : {
                $regex : filter,
            }
        } , {
            lastname : {
                $regex : filter,
            }
        }]

    })

    res.json({
        user : users.map(user => ({
            username : user.username,
            firstname : user.firstname,
            lastname : user.lastname,
            _id : user.id
        }))
    })
})

module.exports = router;
