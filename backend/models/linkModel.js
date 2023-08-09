const mongoose = require('mongoose')

const linkmodel = new mongoose.Schema({
    link: {
        type: String,
        required:[true,"please enter the valid Link"] 
    },
      createdAt:{
        type:Date,
        default:Date.now
     }
    
})

module.exports = mongoose.model("link",linkmodel)