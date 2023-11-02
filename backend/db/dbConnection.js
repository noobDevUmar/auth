const mongoose = require("mongoose")

const dbConnect = async ()=>{
   try {

    await mongoose.connect(process.env.DB)
console.log("Db Connected");
   } catch (error) {
console.log(error);
   }

}

module.exports={
    dbConnect
}