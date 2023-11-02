import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("Db Connected");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
