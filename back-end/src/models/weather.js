const mongoose = require('mongoose');

const { Schema } = mongoose;

const WheatherSchema = new Schema({
  city: {
    type: String,
  },
  temp: {
    type: Number,
  },
  icon: {
    type: String,
  },
});

module.exports = mongoose.model('Wheather', WheatherSchema);
