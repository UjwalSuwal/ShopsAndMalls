import mongoose from "mongoose";

export async function db() {
    try {
        const conn = await mongoose.connect(String(process.env.connectionStr))
        return conn;
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        } else {
            throw new Error("Something went wrong during the database connection.");
        }
    }
}
