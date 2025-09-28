const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/pintrest")

const userSchema = new mongoose.Schema({
  username: { 
      type: String, 
      required: true, 
      unique: true 
  },
  password: { 
      type: String, 
      
  },
  posts: [{type: mongoose.Schema.Types.ObjectId,
    ref:'post'
  }], // Array of posts
  dp: { 
      type: String, // URL or path to profile picture
      default: 'default_profile_picture_url' 
  },
  email: { 
      type: String, 
      required: true, 
      unique: true, 
      lowercase: true, 
  },
  fullName: { 
      type: String
  }
});

userSchema.plugin(plm);

module.exports = mongoose.model('user', userSchema)