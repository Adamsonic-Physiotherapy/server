const mongoose = require('mongoose')
const UsersProfile =  require('../model/profile')

// Get singl
const SingleUser = async(req,res) =>{
   const user_id = req.user._id
   try{
      const users =   await UsersProfile.find({user_id })
      res.status(200).json(users)
   }
   catch(err){
      res.status(501).json({message: err.message})
   }
}


// Get an individual profile
const UserPro = async(req, res)=>{
     const { id } = req.params

     if( !mongoose.Types.ObjectId.isValid(id) ){
            res.status(404).json({error: "NO such profile"})
     }else{
        const SingleProfile = await UserProfile.findById(id)
        if(SingleProfile){
           res.status(201).json(SingleProfile)
        }else{
           res.status(409).json({error: "No such Id "})
        }
     }
}



module.exports = {SingleUser, UserPro }