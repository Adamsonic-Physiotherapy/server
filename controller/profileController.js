const mongoose = require('mongoose')
const UsersProfile =  require('../model/profile')
const CartDB =  require('../model/Cart')

// Get singl
const SingleUser = async(req,res) =>{
   const user_id = req.user._id
   if(user_id){
      try{
         const users =   await UsersProfile.find({user_id })
         res.status(200).json(users)
      }
      catch(err){
         res.status(404).json({error: err.message})
      }
   }else{
      res.status(501).json({error: "No valid user"})
   }
}


// Get singl
const AddCart = async(req,res) =>{
   const { name, image, price } = req.body
   
   if ( !name || !image || !price ){
      res.status(404).json({error: "Field is empty"})
   }
   else{
      const user_id = req.user._id
      if(user_id){
         try{
            const users = await CartDB.create({name, price, image, user_id })
            res.status(200).json(users)
         }
         catch(err){
            res.status(404).json({error: err.message})
         }
      }else{
         res.status(501).json({error: "No valid user"})
      }
   }
}


// Get singl
const Proceed = async(req,res) =>{

   const user_id = req.user._id
   if(user_id){
      try{
         const users =   await UsersProfile.find({user_id })
         res.status(200).json(users)
      }
      catch(err){
         res.status(404).json({error: err.message})
      }
   }else{
      res.status(501).json({error: "No valid user"})
   }
}




module.exports = {SingleUser, AddCart, Proceed}