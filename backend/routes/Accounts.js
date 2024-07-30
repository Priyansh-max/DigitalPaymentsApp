const express = require('express');
const router = express.Router();
const { Account } = require("../database/db");
const authmiddleware = require("../middleware/authmiddleware");
const { default: mongoose } = require('mongoose');
//to get balance
router.get('/balance' ,authmiddleware ,  async (req , res) => {
    const user_id = req.userId

    const account = await Account.findOne({
        userId : user_id
    })

    res.json({
        balance : Account.balance
    })
})

router.post('/transfer' ,authmiddleware ,  async (req ,res) => {

    const session = await mongoose.startSession();
    session.startTransaction();
    
    const amount = req.body.amount;
    const to = req.body.to;

    const account = await Account.findOne({
        userId : req.userId
    }).session(session);
    
    if(!account || account.balance < amount){
        await session.abortTransaction();
        return res.status(400).json({
            message : "Insufficient balance",
        })
    }

    const toaccount = await Account.findOne({
        userId : to
    }).session(session);

    if(!toaccount){
        await session.abortTransaction();
        return res.status(400).json({
            message : "to-account is not valid",
        })
    }

    //perform the transaction
    await Account.updateOne({userId : req.userId} , { $inc: {balance : -amount} }).session(session);
    await Account.updateOne({userId : to} , { $inc : {balance : amount}}).session(session);

    res.status(200).json({
        message : "transfered successfully",
    })
})

module.exports = router;