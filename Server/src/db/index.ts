import mongoose from "mongoose";

const mongodb_realEstate:any = (process.env.MONGODB_URL)

mongoose.set('strictQuery', false);
export const connectDB = async() => {
  try {
    const noteApp = await mongoose.connect(mongodb_realEstate);
    console.log(`Database Connected`) 
  }catch (error) {
        console.log(error)
  }
}
  
