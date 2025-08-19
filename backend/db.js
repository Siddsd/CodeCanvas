import { connect } from "mongoose";
const mongoURI = //MongoDB connection string

const connectToMongo = async () => {
  //function to connect to mongodb
  try {
    await connect(mongoURI);
    console.log("Connected to db");
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongo;
