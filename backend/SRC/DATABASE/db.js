const mongoose = require("mongoose");

const DB = async () => {
  try {
        const conn = await mongoose.connect(process.env.MONGOURL)
    console.log(`database is connected to ${conn.connection.name}`)

  } catch (error) {
    console.log(error.message)
  }
};

module.exports = DB