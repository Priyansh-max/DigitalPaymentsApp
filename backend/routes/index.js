const express = require('express');
const userRouter = require("./users");
const AccountRouter = require("./Accounts")
const router = express.Router;

router.use('/users' , userRouter)
router.use('/Accounts' , AccountRouter)

module.exports = router;