const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
  
  
    title: {
      type: String,
      unique: true,
      required: true,
    },
    start: {
      type: Date,
      unique: false,
      required: false,
    },
    end: {
      type: Date,
      unique: false,
      required: false,
    },
    
    desc: {
      type: String,
      unique: false,
      required: false,
    },
    openSlot: {
      type: Boolean,
      unique: false,
      required: false,
    },
    openEvent: {
      type: Boolean,
      unique: false,
      required: false,
    },

    category: {
      type: String,
      unique: false,
      required: false,
    }                                      
})
      
module.exports = eventsSchema;