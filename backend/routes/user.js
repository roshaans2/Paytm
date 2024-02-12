const express = require("express")
const zod = require("zod")
const { User } = require("../db")
const jwt = require("jsonwebtoken")



const signupBody = zod.object({
    username:zod.string().email(),
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.string()
})

const router = express.Router()

router.post("/signup",async(req,res)=>{
    const {success} = signupBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username:req.body.username
    })

    if(existingUser){
        return res.status(411).json({
            message:"Email already taken"
        })
    }

    const user = new User(req.body)
    await user.save()
    const userId = user._id

    const token = jwt.sign({
        userId
    },process.env.JWT_SECRET)

    res.json({
        message:"User created successfully",
        token:token
    })
})

module.exports = router