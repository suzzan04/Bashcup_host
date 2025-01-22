import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

export async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log(" Already Connected to MongoDB");
    return;
  }
  try {
    const DB_URI = process.env.NEXT_DB_URI;
    const db = await mongoose.connect(DB_URI || "", {
      dbName: "bash_cup",
    });
    connection.isConnected = db.connections[0].readyState;
    console.log("DB connected succesfully.");
  } catch (error) {
    console.error(error);
    console.log("Database connection failed");
    process.exit(1);
  }
}
