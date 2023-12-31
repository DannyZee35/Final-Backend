const mongoose = require('mongoose');



const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        bufferCommands: true, // set bufferCommands to false to disable the MongoDB driver buffering
      });
  
      console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  

module.exports=connectDB;