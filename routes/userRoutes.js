const express = require('express');
const router = express.Router();
const User = require('../models/User')


router.post('/create-user', async (req, res) => {
    // const users = new User(req.body)

    // const result = await users.save().then(user => user)
    
    // res.send(result)
    // console.log(result)

    // OR

    try{

        const user = await User.create(req.body)

        res.status(201).json({user})

    }catch(e){
        res.send(e.message)
    }

})

router.get('/', async (req, res) => {
  
    try{
        
        const users = await User.find({})
        res.status(200).json(users)

    }catch(e){
        res.send(e.message)
    }

})

module.exports = router;