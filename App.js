const express = require('express')
const mongoose = require('mongoose')
const Users = require('./routes/Users')
const UserProfile = require('./routes/Profile')

const cors = require('cors');

require('dotenv').config()
const app = express()

app.use(express.json())
app.use(cors())

// Routes Contollers
app.use('/api/users', Users)
app.use('/api/profile', UserProfile)


mongoose.set('strictQuery', false);

// connect database
const dbUri = 'mongodb+srv://Highscoretech:Keys2541@highscore.muku4gg.mongodb.net/Adamsonic?retryWrites=true&w=majority';
mongoose.connect(dbUri, { useNewUrlParser: true,  useUnifiedTopology: true })
    .then((result)=>  console.log('Database connected'))
    .catch((err)=> console.log(err))
app.listen(process.env.PORT, ()=>{
    console.log("Running on port "+ process.env.PORT)
})