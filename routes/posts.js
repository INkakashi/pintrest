const mongoose = require('mongoose');

// Post schema
const postSchema = new mongoose.Schema({
    image:{
        type: String
    },
    imageText: { 
        type: String, 
        required: true 
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    currentedAt: { 
        type: Date, 
        default: Date.now 
    },
    likes: {
        type: Array, 
        default: []
    }
});

// Create the Post model
module.exports = mongoose.model('post', postSchema)