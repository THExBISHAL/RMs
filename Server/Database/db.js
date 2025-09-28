import mongoose from "mongoose";

export const Connection = async (USERNAME, PASSWORD) => {
  const URL = "mongodb+srv://RMsBishal:RMsBishal@chant.ibvnlsi.mongodb.net";
  try {
    await mongoose.connect(URL);
    console.log("Database connect ho gaya vai.");
  } catch (e) {
    console.log("Error hai vai", e);
  }
};
