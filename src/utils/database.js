import mongoose from "mongoose";

const URI =
  "mongodb+srv://joshuak6k:w0WZGvdv7fVI9QUt@cluster0.0wj0pg6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const databaseConnection = async () => {
  if (!global.mongoose) {
    mongoose.set("strictQuery", false);
    global.mongoose = await mongoose.connect(URI);
  }
};

export default databaseConnection;
