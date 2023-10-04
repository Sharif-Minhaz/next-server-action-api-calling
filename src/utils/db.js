import mongoose from "mongoose";

const connection = {};

async function connectDB() {
	if (connection.isConnected) {
		return;
	}

	try {
		const db = await mongoose.connect(process.env.MONGO);
		connection.isConnected = db.connections[0].readyState;
	} catch (err) {
		throw new Error(err.message);
	}
}

export default connectDB;
