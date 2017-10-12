const express = require('express')
const router = express.Router()
const { UserModel } = require('../db/schema')
router.get("/", async (request, response) => {
    try{
    const users = await UserModel.find({})
    //will send back json
    response.json(users)
    }
    catch (error) {
        response.send(error)
    }
}) 
router.post('/', async (req, res)=> {
    console.log(req.body)
    try {
        const newUser = new UserModel(req.body.user)
        console.log(newUser)
        const saved = await newUser.save()
        res.json(saved)
    
    } 
    catch (err){
    res.send(err)
}
})
module.exports = router