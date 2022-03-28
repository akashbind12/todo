
const express = require("express")

const router = express.Router();
const authenticate = require("../middlewares/authenticate")
const Todo = require("../models/todo.model")

router.post("", authenticate, async (req, res) => {

    req.body.user_id = req.userID;
    try{
        const todo = await Todo.create(req.body)
        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
 
})

router.get("", async (req, res) => {
    try{
        const todo = await Todo.find()
        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})



module.exports = router;