

const { Schema, model } = require('mongoose');

const bcrypt = require("bcrypt")

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  fname: { 
    type: String, 
    required: true,
  },

  lname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },

  password: {
    type: String,
    required: true,
    minlength: 6
  }
});

userSchema.method("verify", async function(pw){
  return await bcrypt.compare(pw, this.password)
})

userSchema.pre("save", async function(next){
  if (!this._id) {
    this._id = new mongoose.Types.ObjectId(); 
  }
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

const User = model('User', userSchema);

module.exports = User;