const mongoose = require('mongoose');

const Uri = process.env.MONGO_DB;

const mongooseArgs = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

exports.connect = () => {
  mongoose.connect(Uri, mongooseArgs, (error) => {
    if (error) console.log(error);
    else {
      console.log(`> 🚀 Ready on ${process.env.LOCALHOST_PORT}`);
    }
  });
};
