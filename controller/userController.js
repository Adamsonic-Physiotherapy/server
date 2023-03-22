const UserDB = require('../model/users')
const bcrypt = require("bcryptjs");
const validator = require('validator')

const userProfileEl = require('../model/profile')
const jwt = require('jsonwebtoken')
 
let SECRET = "highscoretechBringwexsingthebestamoung23498hx93"

const createToken = ((_id)=>{
   return  jwt.sign({_id}, SECRET, { expiresIn: '3d' })
})

// Login controller
const loginUser = (async (req, res)=>{
    const { email , Password } = req.body

    if(!email || !Password){
        res.status(401).json({error : "All field is required"})
    }else{
        const exist = await UserDB.findOne({ email })
        if (!exist){
            res.status(401).json({error :  "Incorrect email"})
        }else{
            const match = await bcrypt.compare(Password,exist.Password)
            if (!match){
                res.status(401).json({error : "Incorrect password"})
            }else{
                try{
                   // create token
                   const Token = createToken(exist._id)
                   res.status(200).json({email, Token})
               } catch (error){
                   res.status(400).json({error : error.message})
               }
            }
        }
    }
})


// Signup controller
const SigninLogins = (async (req, res)=>{ 

    const { email, username, firstname, lastname,address, state, Password } = req.body

    if( !email || !username || !firstname || !lastname || !address || !state || !Password){
        res.status(401).json({error : "All field is required"})
    }else{
        if(!validator.isEmail(email)){
            res.status(401).json({error :  "Email is not valid"})
        } else{
            if(!validator.isStrongPassword(Password)){
                res.status(401).json({error :  "Passoword is not strong"})
            }else{
                const Emailexist = await UserDB.findOne({ email })
                if (Emailexist){
                    res.status(401).json({error :  "Email already exist"})
                }else{
                    const salt = await bcrypt.genSalt(10)
                    const hash = await bcrypt.hash(Password, salt)
                    try{
                        const user = await UserDB.create({ email , Password : hash })
                       await userProfileEl.create({ username, firstname, lastname,address, state, user_id: user._id })

                       const Token = createToken(user._id)
                       res.status(200).json({email, Token})
                    } catch (error){
                        res.status(401).json({error : error.message})
                    }
                }
            }
        }
    } 
})


module.exports = { loginUser,  SigninLogins }