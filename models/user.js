const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  password:String,
  slackID: String,
  googleID:String
},{
  timestamps:{
    createdAt:"created_at", update:"update_at"
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User;
