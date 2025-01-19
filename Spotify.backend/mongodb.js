import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log('Mongodb connection has been established!')
    } catch (error) {
        console.log('MongoDb connection has failed', error.message);
    }
}

export default connectDB;