import { Schema, model, models } from "mongoose";

const dogSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		default: "https://cdn-icons-png.flaticon.com/512/8876/8876600.png",
	},
	breed: {
		type: String,
		required: true,
	},
	like: {
		type: Number,
		default: 0
	},
	dislike: {
		type: Number,
		default: 0
	},
});

export default models.Dog || model("Dog", dogSchema);
