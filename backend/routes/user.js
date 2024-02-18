const express = require("express")
const zod = require("zod")
const { User, Account } = require("../db")
const jwt = require("jsonwebtoken")
const { authMiddleware } = require("../middleware")



const signupBody = zod.object({
    username:zod.string().email(),
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.string().min(6)
})

const updateBody = zod.object({
    password:zod.string().optional(),
    firstName:zod.string().optional(),
    lastName:zod.string().optional()
})

const router = express.Router()

router.get("/bulk",async(req,res)=>{
    const filter = req.query.filter || ""


    const users = await User.find({
        $or:[{
            firstName:{
                "$regex":filter
            }
        },{
            lastNmae:{
                "$regex":filter
            }
        }]
    })
    res.status(200).json({
        users:users.map(user => ({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id:user._id
        }))
    })
})

router.post("/signup",async(req,res)=>{
    const {success} = signupBody.safeParse(req.body)
    console.log(success)
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

    const account = new Account({
        userId,
        balance: Math.floor(1+ Math.random() * 10000)

    })

    await account.save()

    const token = jwt.sign({
        userId
    },process.env.JWT_SECRET)

    res.json({
        message:"User created successfully",
        token:token
    })
})

const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})

router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, process.env.JWT_SECRET);
  
        res.json({
            token: token
        })
        return;
    }

    
    res.status(411).json({
        message: "Error while logging in"
    })
})

router.put("/",authMiddleware,async(req,res)=>{
    const {success} = updateBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message: "Error while updating information"
        })
    }
    await User.updateOne({_id:req.userId},req.body)
    res.json({
        message:"Updated successfully"
    })

})

module.exports = router