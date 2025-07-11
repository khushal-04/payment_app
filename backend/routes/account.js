const express = require("express");
const { authMiddleware } = require("../middleware");
const { Account } = require("../db");
const mongoose = require("mongoose")
const router = express.Router()

router.get('/balance', authMiddleware, async (req, res)=>{
    const account = await Account.findOne({
        userId: req.userId
    })
    res.status(200).json({
        balance: account.balance
    })

})

router.post('/transfer', authMiddleware, async (req,res)=>{
    const session = await mongoose.startSession();
    session.startTransaction()

    const to = req.body.to;
    const amount = req.body.amount;
    const from = await Account.findOne({userId: req.userId}).session(session);
    if (!from || from.balance < amount || amount<=0) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }
    const toAccount = await Account.findOne({ userId: to }).session(session);

    if(!toAccount){
         await session.abortTransaction();
            return res.status(400).json({
                message: "Invalid account"
            });
    }

    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({userId: to}, { $inc:{balance: amount}}).session(session);

    await session.commitTransaction();
    res.json({
        message: "Transfer successful"
    });
})

module.exports= router;